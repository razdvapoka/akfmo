import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

const DEFAULT_LANG = 'ru'
const LOCALE_TO_LANG_MAP = {
  en: 'en-us',
  de: 'de-de',
  ru: 'ru',
}

const EVENT_FIELDS = `
  _meta {
    uid
    tags
  }
  title
  description
  content
  date
  end_date
  location
  archived
  eventurl {
    ... on _ExternalLink {
      url
    }
  }
  cover
`

const PUBLICATION_FIELDS = `
  _meta {
    uid
  }
  title
  year
  cover
  file {
    ... on _FileLink {
      url
    }
  }
  externallink {
    ... on _ExternalLink {
      url
    }
  }
`

async function fetchAPI(query) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}`, {
    headers: {
      'Prismic-Ref': prismicAPI.masterRef.ref,
      'Content-Type': 'application/json',
      Authorization: `Token ${API_TOKEN}`,
    },
  })

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getMainPage(locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    {
      main(uid: "main", lang: "${lang}") {
        title
        about
        events {
          event {
            ... on Event {
              ${EVENT_FIELDS}
            }
          }
        }
      }
    }
  `)
  return data
}

export async function getPublications(locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    {
      publications_page (uid: "publications-page", lang: "${lang}") {
        publications {
          publication {
            ... on Publication {
              ${PUBLICATION_FIELDS}
            }
          }
        }
      }
    }
  `)
  return data
}

export async function getContacts(locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    query {
      contact_page(uid: "contact", lang: "${lang}") {
        address
        embassy
        facebook {
          ... on _ExternalLink {
            url
          }
        }
        instagram {
          ... on _ExternalLink {
            url
          }
        }
        email {
          ... on _ExternalLink {
            url
          }
        }
        embassyemail {
          ... on _ExternalLink {
            url
          }
        }
        embassyurl {
          ... on _ExternalLink {
            url
          }
        }
      }
    }
  `)
  return data
}

export async function getEvent(slug, locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    query {
      event (uid: "${slug}", lang: "${lang}") {
        ${EVENT_FIELDS}
        format
        press {
          item {
            ... on Pressitem {
              title
              url {
                ... on _ExternalLink {
                  url
                  target
                }
                ... on _FileLink {
                  url
                }
              }
            }
          }
        }
        partners {
          item {
            ... on Partner {
              name
              logo
              description
              url {
                ... on _ExternalLink {
                  url
                  target
                }
              }
            }
          }
        }
      }

      allEvents(where: {archived: false}, lang: "${lang}", sortBy: date_ASC) {
        edges {
          node {
            title
            date
            location
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data
}

export async function getAbout(locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    {
      about(uid: "about", lang: "${lang}") {
        sections {
          section {
            __typename
            ... on Aboutsection {
              _meta {
                id
              }
              title
              content
            }
            ... on Aboutpresssection {
              _meta {
                id
              }
              title
              items {
                item {
                  ... on Pressitem {
                    title
                    url {
                      ... on _ExternalLink {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}

export async function getEventsWithSlugs(locale) {
  const lang = LOCALE_TO_LANG_MAP[locale] || DEFAULT_LANG
  const data = await fetchAPI(`
    {
      allEvents (lang:"${lang}", last: 1000) {
        edges {
          node {
            ${EVENT_FIELDS}
          }
        }
      }
    }
  `)
  return data
}
