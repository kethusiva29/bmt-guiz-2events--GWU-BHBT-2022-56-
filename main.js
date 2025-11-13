

const events = [
    {
       title: "Opening Keynote: The Future of Biomedical Engineering",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Dr. Aisha Fernando explores upcoming innovations in medical technology, bio-robotics, and healthcare AI.",
        image: "download (1).webp"
    },
    {
        title: "Workshop: 3D Printing in Prosthetics Design",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "Hands-on session on designing and fabricating custom prosthetics using advanced biocompatible materials.",
        image: "download.webp"
    },
    {
        title: "Talk: AI in Medical Imaging",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "A deep dive into how AI algorithms are transforming diagnostics in radiology and pathology.",
        image: "OIF.webp"
    },
    {
        title: "Talk: Innovations in Bio-Sensor Technology",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "Discover the latest trends in wearable sensors and real-time patient monitoring systems.",
        image: "OIP (1).webp"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Meet biomedical engineers, researchers, and healthcare professionals over refreshments.",
        image: "OIp.(2)webp"
    },

    {
        title: "Panel: Ethics in Biomedical Research",
        type: "Panel",
        date: "2025-11-21T09:30:00",
        description: "Experts discuss data privacy, human testing, and ethical dilemmas in medical innovation.",
        image: "OIP (3).webp"
    },
    {
        title: "Talk: Tissue Engineering and Regenerative Medicine",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "An overview of advances in growing functional tissues and organs for transplantation.",
        image: "OIP (4).webp"
    },
    {
        title: "Workshop: Embedded Systems for Medical Devices",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Learn how microcontrollers are used in pacemakers, infusion pumps, and diagnostic instruments.",
        image: "OIP.webp"
    },
    {
        title: "Talk: The Psychology of Patient-Centered Design",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Explore human factors engineering and empathy-driven healthcare product design.",
        image: "th (1).webp"
    },
    {
        title: "Panel: The Future of Smart Hospitals",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry experts discuss IoT integration, telemedicine, and automation in modern hospitals.",
        image: "th (2).webp"
    },

    {
        title: "Workshop: Biomedical Signal Processing with MATLAB",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical session on analyzing ECG, EEG, and EMG signals using advanced tools.",
        image: "th (3).webp"
    },
    {
        title: "Talk: Advances in Drug Delivery Systems",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "Explore how nanotechnology is reshaping targeted and controlled drug delivery methods.",
        image: "th.webp"
    },
    {
        title: "Talk: Biomedical Robotics and Microdevices",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Learn about cutting-edge biomedical robots used in minimally invasive surgery and diagnostics.",
        image: "th (3).webp"
    },
    {
        title: "Workshop: Data Visualization in Healthcare",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Master tools for visualizing clinical and research data effectively.",
        image: "images/wearable.jpg"
    },
    {
        title: "Closing Panel: The Next Decade of Biomedical Engineering",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "Final reflections and open discussion with the conference’s top speakers and researchers.",
        image: "th (3).webp"
    },

    {
        title: "Pre-Conference Research Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour biomedical innovation challenge for students and researchers to create health tech prototypes.",
        image: "images/hackathon.jpg"
    },
    {
        title: "Talk: Bioinformatics in Precision Medicine",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Explore how data science and bioinformatics enable personalized treatment strategies.",
        image: "images/bioinformatics.jpg"
    },
    {
        title: "Talk: Medical Device Regulations and Safety",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "Understand compliance, certification, and safety testing in biomedical device manufacturing.",
        image: "images/regulation.jpg"
    },
    {
        title: "Workshop: Wearable Health Technology",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "Design and prototype smart wearable devices that monitor vital health parameters.",
        image: "images/wearable.jpg"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Celebrate the best biomedical innovations and recognize outstanding participants.",
        image: "OIF.webp"
    }
];


let currentFilter = 'All';
let searchTerm = '';
function init() {
    renderEvents();
    setupFilters();
    setupSearch();
}
function renderEvents() {
    const container = document.getElementById('event-container');
    container.innerHTML = '';
    const filteredEvents = events.filter(event => {
        const matchesFilter = currentFilter === 'All' || event.type === currentFilter;
        const matchesSearch = searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    updateResultsCount(filteredEvents.length);

    filteredEvents.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.setAttribute('data-type', event.type);

        const img = document.createElement('img');
        img.src = event.image;
        img.alt = event.title;
        img.loading = 'lazy';

        const content = document.createElement('div');
        content.classList.add('card-content');

        const typeBadge = document.createElement('span');
        typeBadge.classList.add('type-badge');
        typeBadge.textContent = event.type;

        const title = document.createElement('h2');
        title.textContent = event.title;

        const date = document.createElement('p');
        date.classList.add('event-date');
        const eventDate = new Date(event.date);
        date.innerHTML = `<strong>📅 ${eventDate.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</strong>`;

        const desc = document.createElement('p');
        desc.classList.add('event-description');
        desc.textContent = event.description;

        content.appendChild(typeBadge);
        content.appendChild(title);
        content.appendChild(date);
        content.appendChild(desc);

        card.appendChild(img);
        card.appendChild(content);

        container.appendChild(card);
    });

    if (filteredEvents.length === 0) {
        container.innerHTML = '<p class="no-results">No events found matching your criteria.</p>';
    }
}

// Setup filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update current filter
            currentFilter = btn.dataset.filter;
            // Re-render events
            renderEvents();
        });
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderEvents();
        });
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} event${count !== 1 ? 's' : ''}`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);