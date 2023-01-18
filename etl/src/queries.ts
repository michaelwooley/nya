export const GetAwesomeRepos = `
  query GetAwesomeRepos($query: String = "topic:awesome", $after: String = null, $first: Int = 10) {
    search(query: $query, type: REPOSITORY, after: $after, first: $first) {
      ...SearchResultItemConnectionFragment
    }
    rateLimit(dryRun: false) {
      limit
      cost
      used
      resetAt
      remaining
      nodeCount
    }
  }

  fragment SearchResultItemEdgeFragment on SearchResultItemEdge {
    node {
      ... on Repository {
        id
        name
        nameWithOwner
        description
        openGraphImageUrl
        createdAt
        updatedAt
        pushedAt
        homepageUrl
        resourcePath
        watchers {
          totalCount
        }
        stargazerCount
        forkCount
        licenseInfo {
          id
          name
          nickname
          url
          key
          pseudoLicense
          spdxId
        }
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          totalCount
          totalSize
          edges {
            node {
              name
              id
              color
            }
            size
          }
        }
        isFork
        isEmpty
        isDisabled
        isArchived
        owner {
          id
          login
          avatarUrl
          ... on Organization {
            id
            email
            name
            location
            isVerified
            description
            websiteUrl
            twitterUsername
            updatedAt
            createdAt
          }
          ... on User {
            id
            email
            company
            companyHTML
            name
            bio
            location
            websiteUrl
            twitterUsername
            updatedAt
            createdAt
            isBountyHunter
            isCampusExpert
            isDeveloperProgramMember
            isEmployee
            isFollowingViewer
            isGitHubStar
            isHireable
            isSiteAdmin
          }
          url
        }
        diskUsage
        repositoryTopics(first: 100) {
          totalCount
          edges {
            node {
              topic {
                stargazerCount
                name
              }
              id
              url
              resourcePath
            }
          }
        }
        isLocked
        isInOrganization
        url
      }
    }
    cursor
  }

  fragment SearchResultItemConnectionFragment on SearchResultItemConnection {
    repositoryCount
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      ...SearchResultItemEdgeFragment
    }
  }
  `;