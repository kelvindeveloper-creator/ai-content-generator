export default  [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },

    // ...existing code...
    {
        name: 'LinkedIn Post Generator',
        desc: 'Generate professional LinkedIn posts tailored to your audience and goals.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
        category: 'LinkedIn',
        slug: 'linkedin-post-generator',
        aiPrompt: 'Generate a professional LinkedIn post based on the given topic and outline. Output in rich text editor format.',
        form: [
            {
                label: 'Enter your LinkedIn post topic or goal',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter outline or key points (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'LinkedIn Hashtag Generator',
        desc: 'Generate relevant hashtags for your LinkedIn posts to increase reach.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
        category: 'LinkedIn',
        slug: 'linkedin-hashtag-generator',
        aiPrompt: 'Generate 10 relevant LinkedIn hashtags based on the given topic. Output in rich text editor format.',
        form: [
            {
                label: 'Enter your LinkedIn post topic or keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    
{
    name: 'Bluesky (bsky.app) Post Generator',
    desc: 'Create engaging posts for Bluesky (bsky.app) based on your topic or idea.',
    icon: '/bsky-logo.png',
    category: 'Bluesky',
    slug: 'bluesky-post-generator',
    aiPrompt: 'Generate an engaging post for Bluesky (bsky.app) based on the given topic or idea. Output in rich text editor format.',
    form: [
        {
            label: 'Enter your Bluesky (bsky.app) post topic or idea',
            field: 'input',
            name: 'topic',
            required: true
        },
        {
            label: 'Enter additional context or style (optional)',
            field: 'textarea',
            name: 'context'
        }
    ]
},
{
    name: 'Bluesky (bsky.app) Hashtag Generator',
    desc: 'Generate trending hashtags for your Bluesky (bsky.app) posts.',
    icon: '/bsky-logo.png',
    category: 'Bluesky',
    slug: 'bluesky-hashtag-generator~',
    aiPrompt: 'Generate 10 trending hashtags for Bluesky (bsky.app) based on the given topic. Output in rich text editor format.',
    form: [
        {
            label: 'Enter your Bluesky (bsky.app) post topic or keywords',
            field: 'input',
            name: 'keywords',
            required: true
        }
    ]
},

// ...existing code...
{
    name: 'Quotation Generator',
    desc: 'Generate professional quotations for your clients with editable fields for items, prices, and company details.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3500/3500833.png', // Use any relevant icon URL
    category: 'Business',
    slug: 'quotation-generator',
    aiPrompt: 'Generate a professional quotation document based on the provided company, client, and item details. Output in rich text editor format.',
    form: [
        {
            label: 'Company Name',
            field: 'input',
            name: 'companyName',
            required: true
        },
        {
            label: 'Client Name',
            field: 'input',
            name: 'clientName',
            required: true
        },
        {
            label: 'Quotation Date',
            field: 'input',
            name: 'quotationDate',
            required: true
        },
        {
            label: 'Item List (name, description, qty, unit price)',
            field: 'textarea',
            name: 'items',
            required: true
        },
        {
            label: 'VAT (%)',
            field: 'input',
            name: 'vat',
            required: false
        },
        {
            label: 'Additional Notes',
            field: 'textarea',
            name: 'notes',
            required: false
        }
    ]
},






]
