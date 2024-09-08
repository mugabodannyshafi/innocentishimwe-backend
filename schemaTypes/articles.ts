import { defineType, defineField } from "sanity";

    export default defineType({
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
              },
        }),
        defineField({
            name: 'source',
            title: 'Source',
            type: 'string',
        })
    ],
});
