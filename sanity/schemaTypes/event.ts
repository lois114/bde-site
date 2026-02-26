import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Événement',
  type: 'document',
  
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Date de début',
      type: 'datetime',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'Date de fin',
      type: 'datetime',
    }),

    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Soirée', value: 'soiree'},
          {title: 'Sport', value: 'sport'},
          {title: 'Intégration', value: 'integration'},
          {title: 'Culture', value: 'culture'},
          {title: 'Autre', value: 'autre'},
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'poster',
      title: 'Affiche',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'photoAlbum',
      title: 'Album photo',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    defineField({
      name: 'videos',
      title: 'Vidéos (liens YouTube/Vimeo)',
      type: 'array',
      of: [{type: 'url'}],
    }),

    defineField({
      name: 'published',
      title: 'Publié',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
  name: 'driveFolderUrl',
  title: 'Lien dossier Google Drive (téléchargement)',
  type: 'url',
  description: 'Lien vers le dossier Google Drive pour télécharger toutes les photos',
}),

defineField({
  name: "signupUrl",
  title: "Lien d'inscription",
  type: "url",
  description: "HelloAsso, Google Form, Shotgun, etc.",
}),
    defineField({
      name: 'featured',
      title: 'À la une',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {title: 'Date (récent → ancien)', name: 'dateDesc', by: [{field: 'startDate', direction: 'desc'}]},
    {title: 'Date (ancien → récent)', name: 'dateAsc', by: [{field: 'startDate', direction: 'asc'}]},
  ],
})