export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedbackEn',
            title: 'FeedbackEn',
            type: 'string'
        },
        {
            name: 'feedbackUa',
            title: 'FeedbackUa',
            type: 'string'
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string'
        },
        // {
        //     name: 'location',
        //     title: 'Testimonial Location',
        //     type: 'geopoint',
        // },
    ]
}