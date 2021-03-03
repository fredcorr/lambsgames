
export default {
    title: "Pages",
    name: "page",
    type: "document",
    __experimental_actions: ['create', 'update', 'publish'],
    fields: [
      {
        title: 'Page Title',
        name: 'page_title',
        description: 'Page title for SEO',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Seo',
        name: 'seo_details',
        type: 'seo_details'
      },
      {
        title: 'Featured Image',
        name: 'featured_image',
        description: 'Image for social and share posts',
        type: 'img'
      },
      {
        title: 'Intro',
        name: 'intro_copy',
        description: 'Opening for the whole site',
        type: 'array',
        of: [ { type: 'block'} ]
      }
    ]
  }
  