export default {
    name: 'soap',
    title: 'Soap',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
          {
            name: 'blurb',
            title: 'Blurb',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description', 
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().positive().precision(2)
          },
          {
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
          },
          {
              name: 'new',
              title: 'New',
              type: 'boolean',
              initialValue: false
          },
          {
            name: 'images',
            title: 'Images', 
            type: 'array', 
            of: [{type: 'picture'}]
          },
          { 
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string'}],
            options: {
                layout: 'tags',
            },
        },
    ]
}