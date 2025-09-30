const API_URL = 'http://localhost:3000/events';

async function displayAllMatches() {
    try {
        const response = await fetch(API_URL);
        const events = await response.json();

        const listContainer = document.getElementById('matches-list');
        if (!listContainer) return;
        
        listContainer.innerHTML = ''; // Clear any static content

        if (events.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center;">No upcoming matches or past results found.</p>';
            return;
        }

        events.forEach(event => {
            const winnerName = event.winner_player_name || 'TBD';
            const formattedDate = new Date(event.event_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const cardHTML = `
                <div class="match-card">
                    <h3>${event.event_name}</h3>
                    <p><strong>Date:</strong>${formattedDate}</p>
                    <p><strong>Sport:</strong>${event.sport}</p>
                    <p><strong>Winner:</strong>${winnerName}</p>
                </div>
            `;
            listContainer.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error('Error fetching matches:', error);
        const listContainer = document.getElementById('matches-list');
        if (listContainer) {
            listContainer.innerHTML = '<p style="text-align:center; color: var(--accent-red);">Could not load match data. Please try again later.</p>';
        }
    }
}

// Run the function when the page loads
window.onload = displayAllMatches;

