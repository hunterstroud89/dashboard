// Dynamic icon scaling based on mouse position
document.querySelectorAll('.icon-container').forEach(container => {
    const icons = container.querySelectorAll('.icon-link');
    
    container.addEventListener('mousemove', (e) => {
        const containerRect = container.getBoundingClientRect();
        const isVertical = container.closest('.dock-left-top, .dock-left-bottom') !== null;
        
        icons.forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            const iconCenter = {
                x: iconRect.left + iconRect.width / 2,
                y: iconRect.top + iconRect.height / 2
            };
            
            const distance = isVertical ? 
                Math.abs(e.clientY - iconCenter.y) :
                Math.abs(e.clientX - iconCenter.x);
            
            const maxDistance = 60;
            const scale = Math.max(1, 1.8 - (distance / maxDistance));
            
            icon.style.transform = `scale(${scale})`;
        });
    });
    
    container.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.style.transform = 'scale(1)';
        });
    });
});

// Add backgrounds object before widgets definition
const backgrounds = {
    mountain: 'https://i.redd.it/5mqp7trvxov51.jpg',
    sakura: 'https://images.cara.app/production/posts/ac6a9628-a147-4d18-b509-288e152d9b29/6AEA8939-B9F4-4995-B750-168F79511F75.jpg-iPU8h-nnfY38YLvllJdef-6AEA8939-B9F4-4995-B750-168F79511F75.jpg?width=1920',
    anime: 'https://i.makeagif.com/media/7-06-2017/XHvb6y.gif',
    lofi: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5dd034ae-6f64-4ca4-b22b-76f5bf04a040_1232x928.png',
    city: 'https://wallpapercave.com/wp/wp9494969.jpg',
    sunset: 'https://wallpapercave.com/wp/wp9657802.gif',
    forest: 'https://images.cara.app/production/posts/ac6a9628-a147-4d18-b509-288e152d9b29/628B3466-DE45-4253-A04D-5052453B7BC5.jpg-y7B8I8OcSyCqIOxkb5Pn9-628B3466-DE45-4253-A04D-5052453B7BC5.jpg?width=1920',
    ocean: 'https://images8.alphacoders.com/778/thumb-1920-778110.jpg',
    night: 'https://wallpapers.com/images/hd/90s-anime-aesthetic-zvrcrvz8micq25pa.jpg',
    minimal: 'https://images6.alphacoders.com/661/thumb-1920-661992.png'
};
/////// from this to...
// Add function to set random background
function setRandomBackground() {
    const urls = Object.values(backgrounds);
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    document.body.style.backgroundImage = `url(${randomUrl})`;
}

// Call on page load
document.addEventListener('DOMContentLoaded', setRandomBackground);
////// this is what to delete if i dont want the background auto changer, auto switcher on load

// Update widget definitions
const widgets = {
    notes: {
        title: 'Notes',
        content: `
            <iframe src="https://w5j3ld.notionapps.com" 
                    style="width: 100%; height: 100%; border: none;"
                    allow="clipboard-write">
            </iframe>
        `
    },
    homarr: {
        title: 'Homarr',
        title: 'Clock',
        content: '<div class="clock-app"></div>'
    },
    todo: {
        title: 'Todo List',
        content: `
            <div class="todo-app">
                <div class="todo-input-wrapper">
                    <input type="text" class="todo-input" placeholder="Add a new task...">
                    <button class="todo-add-btn">Add</button>
                </div>
                <ul class="todo-list"></ul>
            </div>
        `
    },
    music: {
        title: 'Study Sounds',
        content: `
            <div class="sound-player">
                <div class="sound-slider">
                    <label>
                        <svg class="sound-icon" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                        </svg>
                        Lofi Music
                    </label>
                    <input type="range" min="0" max="100" value="0" class="volume-slider" data-sound="lofi">
                </div>
                <div class="sound-slider">
                    <label>
                        <svg class="sound-icon" viewBox="0 0 24 24">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                        </svg>
                        Fireplace
                    </label>
                    <input type="range" min="0" max="100" value="0" class="volume-slider" data-sound="fireplace">
                </div>
                <div class="sound-slider">
                    <label>
                        <svg class="sound-icon" viewBox="0 0 24 24">
                            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
                        </svg>
                        Coffee Shop
                    </label>
                    <input type="range" min="0" max="100" value="0" class="volume-slider" data-sound="coffee">
                </div>
                <div class="sound-slider">
                    <label>
                        <svg class="sound-icon" viewBox="0 0 24 24">
                            <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                        </svg>
                        Ocean Waves
                    </label>
                    <input type="range" min="0" max="100" value="0" class="volume-slider" data-sound="waves">
                </div>
                <div class="youtube-container"></div>
            </div>
        `
    },
    screen: {
        title: 'Background',
        content: `
            <div class="background-switcher">
                ${Object.entries(backgrounds).map(([id, url]) => `
                    <div class="bg-option" data-bg="${url}">
                        <div class="bg-thumbnail" style="background-image: url(${url})"></div>
                    </div>
                `).join('')}
            </div>
        `
    },
    apps: {
        title: 'Applications',
        content: generateAppsGrid
    },
    pomodoro: {
        title: 'Pomodoro Timer',
        content: `
            <div class="pomodoro-app">
                <div class="pomodoro-display">
                    <span class="time">25:00</span>
                </div>
                <div class="pomodoro-controls">
                    <button class="pomodoro-button" id="start-stop">Start</button>
                    <button class="pomodoro-button" id="reset">Reset</button>
                </div>
            </div>
        `
    },
    chatgpt: {
        title: 'ChatGPT',
        content: `
            <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                <p>Due to security restrictions, ChatGPT cannot be embedded directly.</p>
                <a href="https://chat.openai.com" target="_blank" style="display:inline-block; margin-top:20px; padding:10px 20px; background:var(--text-primary); color:var(--bg-primary); text-decoration:none; border-radius:6px;">
                    Open ChatGPT in New Tab
                </a>
            </div>`
    }
};

// Widget creation and drag functionality
function createWidget(widgetId) {
    const widget = widgets[widgetId];
    const widgetEl = document.createElement('div');
    widgetEl.className = 'widget';
    const content = typeof widget.content === 'function' ? widget.content() : widget.content;
    
    widgetEl.innerHTML = `
        <div class="widget-header">
            <svg class="widget-close" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z"/>
            </svg>
        </div>
        <div class="widget-content">${content}</div>
    `;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = widgetEl.querySelector('.widget-header');
    const close = widgetEl.querySelector('.widget-close');

    header.onmousedown = dragMouseDown;
    close.onclick = () => widgetEl.remove();

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Calculate new position
        let newTop = widgetEl.offsetTop - pos2;
        let newLeft = widgetEl.offsetLeft - pos1;
        
        // Get widget dimensions
        const rect = widgetEl.getBoundingClientRect();
        
        // Get dock dimensions
        const leftDock = document.querySelector('.dock-left-top');
        const topDock = document.querySelector('.dock-top-left');
        const leftDockWidth = leftDock.offsetWidth + 10; // Add 10px padding
        const topDockHeight = topDock.offsetHeight + 10; // Add 10px padding
        
        // Constrain to viewport boundaries and respect docks
        newLeft = Math.max(leftDockWidth, Math.min(newLeft, window.innerWidth - rect.width - 10));
        newTop = Math.max(topDockHeight, Math.min(newTop, window.innerHeight - rect.height - 10));
        
        // Apply constrained position
        widgetEl.style.top = newTop + "px";
        widgetEl.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Add resize event listener
    let resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const rect = entry.target.getBoundingClientRect();
            
            // Constrain to viewport boundaries
            let newLeft = entry.target.offsetLeft;
            let newTop = entry.target.offsetTop;
            
            if (rect.right > window.innerWidth - 10) {
                entry.target.style.width = `${window.innerWidth - newLeft - 10}px`;
            }
            if (rect.bottom > window.innerHeight - 10) {
                entry.target.style.height = `${window.innerHeight - newTop - 10}px`;
            }
        }
    });
    
    resizeObserver.observe(widgetEl);

    return widgetEl;
}

// Update Pomodoro Timer functionality
function initPomodoroTimer(widgetEl) {
    if (!widgetEl.dataset.widgetId === 'pomodoro') return;
    
    const display = widgetEl.querySelector('.time');
    const startStopBtn = widgetEl.querySelector('#start-stop');
    const resetBtn = widgetEl.querySelector('#reset');

    let timeLeft = 25 * 60; // 25 minutes
    let isRunning = false;
    let timerId = null;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function toggleTimer() {
        isRunning = !isRunning;
        startStopBtn.textContent = isRunning ? 'Pause' : 'Start';
        
        if (isRunning) {
            timerId = setInterval(() => {
                timeLeft--;
                updateDisplay();
                
                if (timeLeft === 0) {
                    // Play notification sound
                    new Audio('data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAE...').play();
                    clearInterval(timerId);
                    isRunning = false;
                    startStopBtn.textContent = 'Start';
                }
            }, 1000);
        } else {
            clearInterval(timerId);
        }
    }

    function resetTimer() {
        clearInterval(timerId);
        isRunning = false;
        timeLeft = 25 * 60;
        startStopBtn.textContent = 'Start';
        updateDisplay();
    }

    startStopBtn.addEventListener('click', toggleTimer);
    resetBtn.addEventListener('click', resetTimer);

    updateDisplay();
}

// Update sound player functionality
const youtubeVideos = {
    lofi: 'jfKfPfyJRdk',
    fireplace: 'tu2fqd8F-OU',
    coffee: 'qU8o3_T5y5M',
    waves: 'NeBlDtBSbI8'
};

// Modify global state to handle multiple players
const soundState = {
    players: {},
    sliderValues: {
        lofi: 0,
        fireplace: 0,
        coffee: 0,
        waves: 0
    }
};

// Ensure YouTube API is loaded
function loadYouTubeAPI() {
    if (!window.YT && !document.querySelector('script[src*="www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}
loadYouTubeAPI();

window.onYouTubeIframeAPIReady = function() {
    ytApiReady = true;
    // Initialize any pending players
    Object.entries(youtubeVideos).forEach(([type, id]) => {
        if (!soundState.players[type] && soundState.sliderValues[type] > 0) {
            createPlayer(type, id);
        }
    });
};

// Create YouTube player
function createPlayer(soundType, videoId) {
    if (!document.getElementById(`youtube-player-${soundType}`)) {
        const playerDiv = document.createElement('div');
        playerDiv.id = `youtube-player-${soundType}`;
        playerDiv.style.opacity = '0';
        playerDiv.style.height = '0';
        document.body.appendChild(playerDiv);
    }

    soundState.players[soundType] = new YT.Player(`youtube-player-${soundType}`, {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': videoId,
            'origin': window.location.origin
        },
        events: {
            onReady: (event) => {
                const volume = soundState.sliderValues[soundType];
                if (volume > 0) {
                    event.target.setVolume(volume);
                    event.target.playVideo();
                }
            }
        }
    });
}

// Initialize sound player
function initSoundPlayer(widgetEl) {
    const sliders = widgetEl.querySelectorAll('.volume-slider');

    // Set initial slider values from state
    sliders.forEach(slider => {
        const soundType = slider.dataset.sound;
        slider.value = soundState.sliderValues[soundType];
    });

    sliders.forEach(slider => {
        const soundType = slider.dataset.sound;
        const videoId = youtubeVideos[soundType];
        
        slider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value);
            soundState.sliderValues[soundType] = volume;
            
            if (volume > 0) {
                if (!soundState.players[soundType] && ytApiReady) {
                    createPlayer(soundType, videoId);
                } else if (soundState.players[soundType]) {
                    soundState.players[soundType].setVolume(volume);
                    if (soundState.players[soundType].getPlayerState() !== 1) {
                        soundState.players[soundType].playVideo();
                    }
                }
            } else if (soundState.players[soundType]) {
                soundState.players[soundType].pauseVideo();
            }
        });
    });

    // Modified close handler - just removes the widget without stopping playback
    const closeBtn = widgetEl.querySelector('.widget-close');
    closeBtn.addEventListener('click', () => {
        widgetEl.remove();
    });
}

// Add background switcher functionality
function initBackgroundSwitcher(widgetEl) {
    const options = widgetEl.querySelectorAll('.bg-option');
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            const url = option.dataset.bg;
            document.body.style.backgroundImage = `url(${url})`;
            
            // Remove active class from all options
            options.forEach(opt => opt.classList.remove('active'));
            // Add active class to selected option
            option.classList.add('active');
        });

        // Mark current background as active
        const currentBg = document.body.style.backgroundImage;
        if (currentBg.includes(option.dataset.bg)) {
            option.classList.add('active');
        }
    });
}

// Modify the widget creation to initialize Pomodoro timer and sound player
const originalCreateWidget = createWidget;
createWidget = function(widgetId) {
    const widgetEl = originalCreateWidget(widgetId);
    if (widgetId === 'todo') {
        setTimeout(() => initTodoApp(widgetEl), 0);
    } else if (widgetId === 'pomodoro') {
        setTimeout(() => initPomodoroTimer(widgetEl), 0);
    } else if (widgetId === 'music') {
        setTimeout(() => initSoundPlayer(widgetEl), 0);
    } else if (widgetId === 'screen') {
        setTimeout(() => initBackgroundSwitcher(widgetEl), 0);
    } else if (widgetId === 'apps') {
        setTimeout(() => initAppsWidgetEvents(widgetEl), 0);
    }
    return widgetEl;
};

// Update widget click handler
document.querySelectorAll('.app-link[data-app-type="widget"]').forEach(app => {
    app.addEventListener('click', (e) => {
        e.preventDefault();
        const widgetId = app.dataset.widgetId;
        
        // Check if widget already exists
        const existingWidget = document.querySelector(`.widget[data-widget-id="${widgetId}"]`);
        if (existingWidget) {
            existingWidget.remove();
            return;
        }

        // Create new widget if it doesn't exist
        if (widgets[widgetId]) {
            const widgetEl = createWidget(widgetId);
            widgetEl.dataset.widgetId = widgetId;
            document.getElementById('widget-container').appendChild(widgetEl);
            
            const buttonRect = app.getBoundingClientRect();
            const dockWidth = document.querySelector('.dock-left-top').offsetWidth;
            const topDockHeight = document.querySelector('.dock-top-left').offsetHeight;
            
            widgetEl.style.position = 'absolute';
            widgetEl.style.left = `${dockWidth + 15}px`; // Reduced from 30px to 15px
            
            const widgetRect = widgetEl.getBoundingClientRect();
            let top = buttonRect.top;
            
            if (top < topDockHeight + 10) { // Reduced from 20px to 10px
                top = topDockHeight + 10;
            }
            
            const maxBottom = window.innerHeight - widgetRect.height - 10;
            top = Math.max(topDockHeight + 10, Math.min(top, maxBottom)); // Reduced from 20px to 10px
            
            widgetEl.style.top = `${top}px`;
        }
    });
});

// Fullscreen functionality
document.getElementById('fullscreen-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Update fullscreen button icon based on state
document.addEventListener('fullscreenchange', () => {
    const fsButton = document.getElementById('fullscreen-toggle');
    const fsIcon = fsButton.querySelector('.app-icon');
    
    if (document.fullscreenElement) {
        fsIcon.innerHTML = '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>';
    } else {
        fsIcon.innerHTML = '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
    }
});

// Dock toggle functionality
document.getElementById('dock-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const docks = document.querySelectorAll('.dock');
    const toggleButton = document.getElementById('dock-toggle');
    const toggleIcon = toggleButton.querySelector('.app-icon');
    
    docks.forEach(dock => {
        if (dock.style.display === 'none') {
            dock.style.display = '';
            toggleIcon.innerHTML = '<path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2z"/>';
        } else {
            dock.style.display = 'none';
            toggleIcon.innerHTML = '<path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm2 2h10v2H7V7z"/>';
        }
    });
});

// Home menu functionality
document.querySelector('[data-app-type="home"]').addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.getElementById('home-menu');
    const isVisible = menu.classList.contains('show');
    
    // Hide menu if clicking again
    if (isVisible) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('home-menu');
    const homeButton = document.querySelector('[data-app-type="home"]');
    
    if (!menu.contains(e.target) && !homeButton.contains(e.target)) {
        menu.classList.remove('show');
    }
});

// Settings and theme functionality
document.getElementById('settings-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const menu = document.getElementById('settings-menu');
    menu.classList.toggle('show');
});

// Theme toggle
document.querySelector('.theme-button').addEventListener('click', () => {
    const root = document.documentElement;
    const button = document.querySelector('.theme-button');
    
    if (root.getAttribute('data-theme') === 'light') {
        root.removeAttribute('data-theme');
        button.textContent = 'Dark';
    } else {
        root.setAttribute('data-theme', 'light');
        button.textContent = 'Light';
    }
});

// Close menus when clicking outside
document.addEventListener('click', (e) => {
    const menus = document.querySelectorAll('.menu-container');
    const settingsButton = document.getElementById('settings-toggle');
    const homeButton = document.querySelector('[data-app-type="home"]');
    
    menus.forEach(menu => {
        if (!menu.contains(e.target) && 
            e.target !== settingsButton && 
            e.target !== homeButton && 
            !settingsButton.contains(e.target) && 
            !homeButton.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});

// Add drag-and-drop functionality to apps
function initDraggableApps() {
    const appLinks = document.querySelectorAll('.app-link');
    const docks = document.querySelectorAll('.dock');

    appLinks.forEach(app => {
        app.setAttribute('draggable', 'true');
        
        app.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', app.outerHTML);
            app.classList.add('dragging');
        });

        app.addEventListener('dragend', () => {
            app.classList.remove('dragging');
        });

        // Add dragover event to each app for reordering
        app.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingApp = document.querySelector('.dragging');
            if (draggingApp && draggingApp !== app) {
                const rect = app.getBoundingClientRect();
                const appContainer = app.parentElement;
                const isVertical = appContainer.classList.contains('dock-left-top') || 
                                 appContainer.classList.contains('dock-left-bottom');
                
                const offset = isVertical ? 
                    (e.clientY - rect.top) / rect.height : 
                    (e.clientX - rect.left) / rect.width;
                
                if (offset < 0.5) {
                    app.parentElement.insertBefore(draggingApp, app);
                } else {
                    app.parentElement.insertBefore(draggingApp, app.nextSibling);
                }
            }
        });
    });

    docks.forEach(dock => {
        const appContainer = dock.querySelector('.app-container');
        
        appContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingApp = document.querySelector('.dragging');
            if (draggingApp) {
                appContainer.classList.add('drag-over');
                
                // If dragging over empty space in container
                const afterElement = getDragAfterElement(appContainer, e.clientY, e.clientX);
                if (afterElement == null) {
                    appContainer.appendChild(draggingApp);
                }
            }
        });

        appContainer.addEventListener('dragleave', () => {
            appContainer.classList.remove('drag-over');
        });

        appContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            appContainer.classList.remove('drag-over');
            
            const draggingApp = document.querySelector('.dragging');
            if (!draggingApp) {
                const appHTML = e.dataTransfer.getData('text/plain');
                appContainer.insertAdjacentHTML('beforeend', appHTML);
                const newApp = appContainer.lastElementChild;
                initAppEventListeners(newApp);
            }
        });
    });
}

// Helper function to determine where to drop the app
function getDragAfterElement(container, y, x) {
    const isVertical = container.classList.contains('dock-left-top') || 
                      container.classList.contains('dock-left-bottom');
    
    const draggableElements = [...container.querySelectorAll('.app-link:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = isVertical ?
            y - box.top - box.height / 2 :
            x - box.left - box.width / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Helper function to initialize event listeners for an app
function initAppEventListeners(app) {
    app.setAttribute('draggable', 'true');
    
    app.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', app.outerHTML);
        app.classList.add('dragging');
    });

    app.addEventListener('dragend', () => {
        app.classList.remove('dragging');
    });

    // Reinitialize existing click handlers
    if (app.dataset.appType === 'widget') {
        app.addEventListener('click', (e) => {
            e.preventDefault();
            const widgetId = app.dataset.widgetId;
            // ...existing widget creation code...
        });
    }
}

// Initialize draggable apps when the page loads
document.addEventListener('DOMContentLoaded', initDraggableApps);

// Add function to generate apps grid content
function generateAppsGrid() {
    const dockApps = document.querySelectorAll('.dock .app-link');
    let externalAppsHtml = '';
    let widgetAppsHtml = '';
    
    dockApps.forEach(app => {
        const name = app.querySelector('.app-name').textContent;
        const iconSvg = app.querySelector('.app-icon').innerHTML;
        const type = app.dataset.appType;
        const widgetId = app.dataset.widgetId;
        
        const appHtml = `
            <div class="app-item" data-app-type="${type}" ${widgetId ? `data-widget-id="${widgetId}"` : ''}>
                <div class="app-icon">
                    <svg viewBox="0 0 24 24">${iconSvg}</svg>
                </div>
                <div class="app-name">${name}</div>
            </div>
        `;

        if (type === 'external') {
            externalAppsHtml += appHtml;
        } else if (type === 'widget') {
            widgetAppsHtml += appHtml;
        }
    });
    
    return `
        <div class="apps-grid-container">
            <div class="apps-section">
                <div class="apps-section-title">External Links</div>
                <div class="apps-grid">${externalAppsHtml}</div>
            </div>
            <div class="apps-divider"></div>
            <div class="apps-section">
                <div class="apps-section-title">Widgets</div>
                <div class="apps-grid">${widgetAppsHtml}</div>
            </div>
        </div>
    `;
}

// Update the apps widget definition
widgets.apps = {
    title: 'Applications',
    content: generateAppsGrid
};

// Add click handler for app items in the grid
function initAppsWidgetEvents(widgetEl) {
    if (widgetEl.dataset.widgetId !== 'apps') return;
    
    widgetEl.querySelectorAll('.app-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.appType;
            const widgetId = item.dataset.widgetId;
            
            if (type === 'widget' && widgetId) {
                // Create or toggle widget
                const existingWidget = document.querySelector(`.widget[data-widget-id="${widgetId}"]`);
                if (existingWidget) {
                    existingWidget.remove();
                } else {
                    const newWidget = createWidget(widgetId);
                    newWidget.dataset.widgetId = widgetId;
                    document.getElementById('widget-container').appendChild(newWidget);
                    positionWidget(newWidget, item);
                }
            }
        });
    });
}

// Add function to position widget
function positionWidget(widgetEl, sourceEl) {
    const rect = sourceEl.getBoundingClientRect();
    const dockWidth = document.querySelector('.dock-left-top').offsetWidth;
    const topDockHeight = document.querySelector('.dock-top-left').offsetHeight;
    
    widgetEl.style.position = 'absolute';
    widgetEl.style.left = `${dockWidth + 15}px`;
    
    let top = rect.top;
    if (top < topDockHeight + 10) {
        top = topDockHeight + 10;
    }
    
    const maxBottom = window.innerHeight - widgetEl.offsetHeight - 10;
    top = Math.max(topDockHeight + 10, Math.min(top, maxBottom));
    
    widgetEl.style.top = `${top}px`;
}

// Add new app form handler
document.querySelector('.add-app-button').addEventListener('click', () => {
    const name = document.getElementById('new-app-name').value.trim();
    const url = document.getElementById('new-app-url').value.trim();
    const iconUrl = document.getElementById('new-app-icon').value.trim();
    
    if (name && url) {
        const appLink = document.createElement('a');
        appLink.href = url;
        appLink.className = 'app-link';
        appLink.dataset.appType = 'external';
        appLink.target = '_blank';
        
        appLink.innerHTML = `
            <div class="app-wrapper">
                ${iconUrl ? 
                    `<img class="app-icon" src="${iconUrl}" alt="${name}">` :
                    `<svg class="app-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.13 8 8-3.58 8-8 8z"/>
                    </svg>`
                }
                <span class="app-name">${name}</span>
            </div>
        `;
        
        const dockContainer = document.querySelector('.dock-top-left .app-container');
        dockContainer.appendChild(appLink);
        
        // Initialize draggable functionality for new app
        initDraggableItem(appLink);
        
        // Clear form
        document.getElementById('new-app-name').value = '';
        document.getElementById('new-app-url').value = '';
        document.getElementById('new-app-icon').value = '';
        
        // Close settings menu
        document.getElementById('settings-menu').classList.remove('show');
    }
});

// Remove the widget open handler
document.querySelectorAll('.open-as-widget').forEach(button => {
    button.remove();
});

// Add todo functionality
function initTodoApp(widgetEl) {
    if (!widgetEl.dataset.widgetId === 'todo') return;
    
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const todoListEl = widgetEl.querySelector('.todo-list');
    const todoInputEl = widgetEl.querySelector('.todo-input');
    const addBtnEl = widgetEl.querySelector('.todo-add-btn');

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodoList() {
        todoListEl.innerHTML = todos.map((todo, index) => `
            <li class="todo-item ${todo.completed ? 'completed' : ''}" data-index="${index}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${todo.text}</span>
                <button class="todo-delete">×</button>
            </li>
        `).join('');

        // Add event handlers for checkboxes and delete buttons
        todoListEl.querySelectorAll('.todo-item').forEach(todoEl => {
            const checkbox = todoEl.querySelector('input[type="checkbox"]');
            const deleteBtn = todoEl.querySelector('.todo-delete');
            const index = parseInt(todoEl.dataset.index);

            checkbox.addEventListener('change', () => {
                todos[index].completed = checkbox.checked;
                saveTodos();
                renderTodoList();
            });

            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodoList();
            });
        });
    }

    // Initialize content
    renderTodoList();

    // Add new todo handler
    function addTodo() {
        const text = todoInputEl.value.trim();
        if (text) {
            todos.push({ text, completed: false });
            saveTodos();
            renderTodoList();
            todoInputEl.value = '';
        }
    }

    addBtnEl.addEventListener('click', addTodo);
    todoInputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
}

