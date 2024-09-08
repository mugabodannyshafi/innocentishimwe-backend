import { defineField, defineType } from "sanity";

export default defineType({
    name: 'about',
    title: 'Know the Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'section1',
            title: 'Section 1',
            type: 'string',
        }),
        defineField({
            name: 'section2',
            title: 'Section 2',
            type: 'string',
        }),
        defineField({
            name: 'section3',
            title: 'Section 3',
            type: 'string',
        }),
    ]
});
