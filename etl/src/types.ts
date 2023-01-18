import { Exact, InputMaybe, Scalars } from '@octokit/graphql-schema';

export type GetAwesomeReposQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type GetAwesomeReposQuery = {
  __typename?: 'Query';
  search: {
    __typename?: 'SearchResultItemConnection';
    repositoryCount: number;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      startCursor?: string | null;
      hasPreviousPage: boolean;
    };
    edges?: Array<{
      __typename?: 'SearchResultItemEdge';
      cursor: string;
      node?:
        | { __typename?: 'App' }
        | { __typename?: 'Discussion' }
        | { __typename?: 'Issue' }
        | { __typename?: 'MarketplaceListing' }
        | { __typename?: 'Organization' }
        | { __typename?: 'PullRequest' }
        | {
            __typename?: 'Repository';
            id: string;
            name: string;
            nameWithOwner: string;
            description?: string | null;
            openGraphImageUrl: any;
            createdAt: any;
            updatedAt: any;
            pushedAt?: any | null;
            homepageUrl?: any | null;
            resourcePath: any;
            stargazerCount: number;
            forkCount: number;
            isFork: boolean;
            isEmpty: boolean;
            isDisabled: boolean;
            isArchived: boolean;
            diskUsage?: number | null;
            isLocked: boolean;
            isInOrganization: boolean;
            url: any;
            watchers: { __typename?: 'UserConnection'; totalCount: number };
            licenseInfo?: {
              __typename?: 'License';
              id: string;
              name: string;
              nickname?: string | null;
              url?: any | null;
              key: string;
              pseudoLicense: boolean;
              spdxId?: string | null;
            } | null;
            languages?: {
              __typename?: 'LanguageConnection';
              totalCount: number;
              totalSize: number;
              edges?: Array<{
                __typename?: 'LanguageEdge';
                size: number;
                node: {
                  __typename?: 'Language';
                  name: string;
                  id: string;
                  color?: string | null;
                };
              } | null> | null;
            } | null;
            owner:
              | {
                  __typename?: 'Organization';
                  id: string;
                  name?: string | null;
                  location?: string | null;
                  isVerified: boolean;
                  description?: string | null;
                  websiteUrl?: any | null;
                  twitterUsername?: string | null;
                  updatedAt: any;
                  createdAt: any;
                  login: string;
                  avatarUrl: any;
                  url: any;
                }
              | {
                  __typename?: 'User';
                  id: string;
                  email: string;
                  company?: string | null;
                  companyHTML: any;
                  name?: string | null;
                  bio?: string | null;
                  location?: string | null;
                  websiteUrl?: any | null;
                  twitterUsername?: string | null;
                  updatedAt: any;
                  createdAt: any;
                  isBountyHunter: boolean;
                  isCampusExpert: boolean;
                  isDeveloperProgramMember: boolean;
                  isEmployee: boolean;
                  isFollowingViewer: boolean;
                  isGitHubStar: boolean;
                  isHireable: boolean;
                  isSiteAdmin: boolean;
                  login: string;
                  avatarUrl: any;
                  url: any;
                };
            repositoryTopics: {
              __typename?: 'RepositoryTopicConnection';
              totalCount: number;
              edges?: Array<{
                __typename?: 'RepositoryTopicEdge';
                node?: {
                  __typename?: 'RepositoryTopic';
                  id: string;
                  url: any;
                  resourcePath: any;
                  topic: {
                    __typename?: 'Topic';
                    stargazerCount: number;
                    name: string;
                  };
                } | null;
              } | null> | null;
            };
          }
        | { __typename?: 'User' }
        | null;
    } | null> | null;
  };
  rateLimit?: {
    __typename?: 'RateLimit';
    limit: number;
    cost: number;
    used: number;
    resetAt: any;
    remaining: number;
    nodeCount: number;
  } | null;
};

export type SearchResultItemEdgeFragmentFragment = {
  __typename?: 'SearchResultItemEdge';
  cursor: string;
  node?:
    | { __typename?: 'App' }
    | { __typename?: 'Discussion' }
    | { __typename?: 'Issue' }
    | { __typename?: 'MarketplaceListing' }
    | { __typename?: 'Organization' }
    | { __typename?: 'PullRequest' }
    | {
        __typename?: 'Repository';
        id: string;
        name: string;
        nameWithOwner: string;
        description?: string | null;
        openGraphImageUrl: any;
        createdAt: any;
        updatedAt: any;
        pushedAt?: any | null;
        homepageUrl?: any | null;
        resourcePath: any;
        stargazerCount: number;
        forkCount: number;
        isFork: boolean;
        isEmpty: boolean;
        isDisabled: boolean;
        isArchived: boolean;
        diskUsage?: number | null;
        isLocked: boolean;
        isInOrganization: boolean;
        url: any;
        watchers: { __typename?: 'UserConnection'; totalCount: number };
        licenseInfo?: {
          __typename?: 'License';
          id: string;
          name: string;
          nickname?: string | null;
          url?: any | null;
          key: string;
          pseudoLicense: boolean;
          spdxId?: string | null;
        } | null;
        languages?: {
          __typename?: 'LanguageConnection';
          totalCount: number;
          totalSize: number;
          edges?: Array<{
            __typename?: 'LanguageEdge';
            size: number;
            node: {
              __typename?: 'Language';
              name: string;
              id: string;
              color?: string | null;
            };
          } | null> | null;
        } | null;
        owner:
          | {
              __typename?: 'Organization';
              id: string;
              name?: string | null;
              location?: string | null;
              isVerified: boolean;
              description?: string | null;
              websiteUrl?: any | null;
              twitterUsername?: string | null;
              updatedAt: any;
              createdAt: any;
              login: string;
              avatarUrl: any;
              url: any;
            }
          | {
              __typename?: 'User';
              id: string;
              email: string;
              company?: string | null;
              companyHTML: any;
              name?: string | null;
              bio?: string | null;
              location?: string | null;
              websiteUrl?: any | null;
              twitterUsername?: string | null;
              updatedAt: any;
              createdAt: any;
              isBountyHunter: boolean;
              isCampusExpert: boolean;
              isDeveloperProgramMember: boolean;
              isEmployee: boolean;
              isFollowingViewer: boolean;
              isGitHubStar: boolean;
              isHireable: boolean;
              isSiteAdmin: boolean;
              login: string;
              avatarUrl: any;
              url: any;
            };
        repositoryTopics: {
          __typename?: 'RepositoryTopicConnection';
          totalCount: number;
          edges?: Array<{
            __typename?: 'RepositoryTopicEdge';
            node?: {
              __typename?: 'RepositoryTopic';
              id: string;
              url: any;
              resourcePath: any;
              topic: {
                __typename?: 'Topic';
                stargazerCount: number;
                name: string;
              };
            } | null;
          } | null> | null;
        };
      }
    | { __typename?: 'User' }
    | null;
};

export type SearchResultItemConnectionFragmentFragment = {
  __typename?: 'SearchResultItemConnection';
  repositoryCount: number;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    startCursor?: string | null;
    hasPreviousPage: boolean;
  };
  edges?: Array<{
    __typename?: 'SearchResultItemEdge';
    cursor: string;
    node?:
      | { __typename?: 'App' }
      | { __typename?: 'Discussion' }
      | { __typename?: 'Issue' }
      | { __typename?: 'MarketplaceListing' }
      | { __typename?: 'Organization' }
      | { __typename?: 'PullRequest' }
      | {
          __typename?: 'Repository';
          id: string;
          name: string;
          nameWithOwner: string;
          description?: string | null;
          openGraphImageUrl: any;
          createdAt: any;
          updatedAt: any;
          pushedAt?: any | null;
          homepageUrl?: any | null;
          resourcePath: any;
          stargazerCount: number;
          forkCount: number;
          isFork: boolean;
          isEmpty: boolean;
          isDisabled: boolean;
          isArchived: boolean;
          diskUsage?: number | null;
          isLocked: boolean;
          isInOrganization: boolean;
          url: any;
          watchers: { __typename?: 'UserConnection'; totalCount: number };
          licenseInfo?: {
            __typename?: 'License';
            id: string;
            name: string;
            nickname?: string | null;
            url?: any | null;
            key: string;
            pseudoLicense: boolean;
            spdxId?: string | null;
          } | null;
          languages?: {
            __typename?: 'LanguageConnection';
            totalCount: number;
            totalSize: number;
            edges?: Array<{
              __typename?: 'LanguageEdge';
              size: number;
              node: {
                __typename?: 'Language';
                name: string;
                id: string;
                color?: string | null;
              };
            } | null> | null;
          } | null;
          owner:
            | {
                __typename?: 'Organization';
                id: string;
                name?: string | null;
                location?: string | null;
                isVerified: boolean;
                description?: string | null;
                websiteUrl?: any | null;
                twitterUsername?: string | null;
                updatedAt: any;
                createdAt: any;
                login: string;
                avatarUrl: any;
                url: any;
              }
            | {
                __typename?: 'User';
                id: string;
                email: string;
                company?: string | null;
                companyHTML: any;
                name?: string | null;
                bio?: string | null;
                location?: string | null;
                websiteUrl?: any | null;
                twitterUsername?: string | null;
                updatedAt: any;
                createdAt: any;
                isBountyHunter: boolean;
                isCampusExpert: boolean;
                isDeveloperProgramMember: boolean;
                isEmployee: boolean;
                isFollowingViewer: boolean;
                isGitHubStar: boolean;
                isHireable: boolean;
                isSiteAdmin: boolean;
                login: string;
                avatarUrl: any;
                url: any;
              };
          repositoryTopics: {
            __typename?: 'RepositoryTopicConnection';
            totalCount: number;
            edges?: Array<{
              __typename?: 'RepositoryTopicEdge';
              node?: {
                __typename?: 'RepositoryTopic';
                id: string;
                url: any;
                resourcePath: any;
                topic: {
                  __typename?: 'Topic';
                  stargazerCount: number;
                  name: string;
                };
              } | null;
            } | null> | null;
          };
        }
      | { __typename?: 'User' }
      | null;
  } | null> | null;
};
