export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ff81a8577e08536a8c5aec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3y2xsa9c',
                  apiId: '587f9a0a-3c27-43ad-9ed4-13fa49536d5f'
                },
                {
                  buildHookId: '60ff81a8580df9521b3fef20',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1zfjhk99',
                  apiId: '5e7f7c9f-fe99-4028-b998-783ae175ebb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gjkillsppl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1zfjhk99.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
