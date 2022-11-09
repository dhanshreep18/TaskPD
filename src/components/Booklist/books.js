const books = [

    {
        name:'Princess of Wales', 
        author:'Diana', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'science',
        image: 'https://m.media-amazon.com/images/I/914N2sGNM8L.jpg'
        
    },
  
    {
        name:'Earth to Mars', 
        author:'Elon Musk', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'science',
        image: 'https://m.media-amazon.com/images/I/61PyxjEk3hL.jpg'
    },

    {
        name:'Martin Luther the Great', 
        author:'Harry Styles', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'science',
        image: 'https://m.media-amazon.com/images/I/81AvbtmfdCL.jpg'
    },

    {
        name:'The Domestic Godess', 
        author:'Sophie Richards', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'science',
        image: 'https://visme.co/blog/wp-content/uploads/2021/06/sophie-kinsella-the-undomestic-goddess-book-cover-example.jpeg'
    },

    {
        name:'A Heart so Fierce & Broken', 
        author:'Bloomsbery', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'chemistry',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/06/a-heart-so-fierce-and-broken-brigid-kemmerer.jpg?resize=1018%2C1536&ssl=1'
    },

    {
        name:'Wilder Girls', 
        author:'Rory Power', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'chemistry',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/06/wilder-girls-rory-power.jpg?resize=676%2C1024&ssl=1'
    },

    {
        name:'Stalking Jack the Ripper', 
        author:'Kerri Maniscalo', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'chemistry',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2016/09/Stalking-Jack-the-Ripper-Maniscalco-scaled.jpg?resize=1024%2C1536&ssl=1'
    },

    {
        name:'The Inhertance of Game', 
        author:'Jennifer Lynn', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'chemistry',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/the-inheritance-games-jennifer-lynn-barnes.jpg?resize=1354%2C2048&ssl=1'
    },

    {
        name:'A Song of Wraths & Ruin', 
        author:'Rosy Brown', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'maths',
        image:'https://i0.wp.com/austinedecker.com/wp-content/uploads/a-song-of-wraiths-and-ruin-roseanne-a-brown.jpg?resize=1355%2C2048&ssl=1'
    },

    {
        name:'To the Best Boys', 
        author:'Mary Weber', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'maths',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/03/To-Best-the-Boys-Mary-Weber.jpg?resize=666%2C1024&ssl=1'
    },

    {
        name:'Devil with the Devil', 
        author:'Mercenary Libra', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'maths',
        image:'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/12/deal-with-the-devil-kit-rocha.jpg?resize=1018%2C1536&ssl=1'
    },

    {
        name:'Stolen Songbird', 
        author:'Daneielle Jensen', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'maths',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/stolen-songbird-danielle-l-jensen.jpg?w=737&ssl=1'
    },

    {
        name:'Every Heart a Doorway', 
        author:'Seanan McGuire', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'physics',
        image:'https://i0.wp.com/austinedecker.com/wp-content/uploads/every-heart-a-doorway-seanan-mcguire.jpg?resize=1356%2C2048&ssl=1'
    },

    {
        name:'Midnight Bargain', 
        author:'C.L. Poly', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'physics',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/the-midnight-bargain-cl-polk.jpg?w=1000&ssl=1'
    },

    {
        name:'Well Met', 
        author:'Jen DeLuca', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'physics',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/07/well-met-jen-deluca.jpg?resize=1024%2C1536&ssl=1'
    },

    {
        name:'Cold in her Bones', 
        author:'Peternelle Arsdale', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'physics',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/01/The-Cold-is-in-Her-Bones-van-Arsdale.jpg?resize=1008%2C1536&ssl=1'
    },

    {
        name:'Ballard of Songbird and Snakes', 
        author:'Suzzane Collins', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'biology',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2019/12/the-ballad-of-songbirds-and-snakes-suzanne-collins.jpg?w=794&ssl=1'
    },

    {
        name:'Reaper at the Gates', 
        author:'Saba Tahir', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'biology',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2018/04/A-Reaper-at-the-Gates-Tahir.jpg?w=1000&ssl=1'
    },

    {
        name:'Gilded Wolves', 
        author:'Roshni Choksi', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'biology',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/2018/11/The-Gilded-Wolves-Chokshi.jpg?resize=675%2C1024&ssl=1'
    },

    {
        name:'Splintered', 
        author:'A.G. Howard', 
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        date:'12/01/2001',
        subject: 'biology',
        image: 'https://i0.wp.com/austinedecker.com/wp-content/uploads/Splintered-ag-howard.jpg?w=1200&ssl=1'
    },
    
  
];
export default books;