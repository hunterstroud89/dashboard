# Modern Desktop Interface Documentation

## System Overview
A modern, glass-morphic desktop interface inspired by modern operating systems, featuring draggable docks, interactive widgets, and a dynamic theme system.

## Interface Layout

### Dock System
1. **Top-Left Dock** (Primary Navigation)
   - Home menu with system shortcuts
   - Quick access to external applications
   - Integrated menu system for additional options
   - Social media and productivity links
   - Dynamic icon scaling on hover

2. **Top-Right Dock** (System Controls)
   - Settings menu access
   - Theme toggle (Light/Dark modes)
   - Power options
   - System notifications area

3. **Left-Top Dock** (Widget Shortcuts)
   - Calculator
   - Notes
   - Homarr Integration
   - Pomodoro Timer
   - Todo List
   - App Drawer
   - Fully draggable icons
   - Automatic position saving

4. **Left-Bottom Dock** (Media Controls)
   - Study Sounds Player
   - Background Switcher
   - Volume controls
   - Media playback widgets

### Central Elements
1. **Clock System**
   - Centered pull-down toggle
   - Large format time display
   - Date display with full weekday
   - Smooth animation transitions
   - Auto-updates every minute

2. **Agenda System**
   - Side pull-out interface
   - Daily schedule overview
   - Time-based event listing
   - Clean, readable layout

## Widget System

### Study Sounds Widget
- **Audio Sources:**
  - Lofi Music Stream
  - Fireplace Ambiance
  - Coffee Shop Background
  - Ocean Waves
- **Features:**
  - Individual volume controls
  - Persistent playback state
  - Multiple simultaneous streams
  - Background playback support

### Pomodoro Timer Widget
- **Core Features:**
  - 25-minute work intervals
  - Break period management
  - Visual countdown display
  - Audio notifications
  - Start/Pause/Reset controls
  - Session tracking

### Calculator Widget
- Basic arithmetic operations
- Memory functions
- Responsive layout
- Keyboard input support

### Notes Widget
- Text editing capabilities
- Auto-save functionality
- Resize support
- Markdown support

### Background Switcher
- Multiple preset backgrounds
- Live preview
- Smooth transitions
- Custom background support

## Technical Implementation

### CSS Features
- Glass morphism effects using:
  ```css
  backdrop-filter: blur(10px)
  background: rgba(28, 39, 49, 0.95)
  ```
- Responsive scaling
- Dynamic theme variables
- Smooth animations
- Flexible layouts

### JavaScript Components
1. **Drag and Drop System**
   - Icon reordering
   - Widget positioning
   - Dock organization
   - Position memory

2. **Theme Engine**
   - Light/Dark mode support
   - Dynamic color variables
   - Smooth transitions
   - Persistent preferences

3. **Widget Management**
   - Dynamic creation
   - State persistence
   - Resize handling
   - Focus management

4. **Audio System**
   - YouTube API integration
   - Multiple stream handling
   - Volume management
   - Background playback

### Performance Optimizations
- Lazy widget loading
- Efficient DOM updates
- Cached audio streams
- Optimized animations

## Browser Compatibility
- Chrome (Recommended)
- Firefox
- Safari
- Edge (Chromium)

## Usage Guidelines

### Widget Management
1. Click dock icons to open widgets
2. Drag widget headers to reposition
3. Resize from bottom-right corner
4. Close with top-left button

### Dock Organization
1. Drag icons between docks
2. Long-press for additional options
3. Use menu system for quick access
4. Hide docks for focused work

### Theme Customization
1. Access via settings menu
2. Toggle between Light/Dark
3. Theme affects all components
4. Persistent across sessions

### Audio Management
1. Multiple sounds can play simultaneously
2. Volume levels are saved
3. Playback continues when widget is closed
4. Use global audio controls

## Development Notes

### Class Reference
- `.dock`: Main dock containers
- `.widget`: Widget windows
- `.app-link`: Application shortcuts
- `.app-icon`: Icon elements
- `.glass`: Glass morphism effect

### Event Handlers
- `dragstart`: Icon/widget drag initiation
- `drop`: Icon/widget placement
- `resize`: Widget size management
- `click`: General interactions

### State Management
- Local storage for preferences
- Session storage for temporary states
- Widget position memory
- Audio state persistence

### Future Enhancements
- Additional widgets
- Custom themes
- More audio sources
- Calendar integration
- Weather widget
- Mobile responsiveness

# Desktop Interface Development Notes

## Component Reference

### Dock System
- `.dock`: Base class for all docks
- `.dock-top-left`: Primary navigation dock (apps)
- `.dock-top-right`: System controls dock (settings)
- `.dock-left-top`: Widget shortcuts dock
- `.dock-left-bottom`: Media controls dock

### App Icons
- `.app-link`: Clickable app container
- `.app-wrapper`: Icon and label wrapper
- `.app-icon`: SVG icon styling
- `.app-name`: App label text
- `[data-app-type="widget"]`: Widget launcher
- `[data-app-type="external"]`: External link
- `[data-app-type="system"]`: System control
- `[data-widget-id="X"]`: Widget identifier

### Widget System
- `.widget`: Base widget container
- `.widget-header`: Draggable title bar
- `.widget-close`: Close button
- `.widget-content`: Main content area
- `.widget[data-widget-id="X"]`: Specific widget instance

### Menu System
- `.menu-container`: Dropdown menu wrapper
- `.menu-wrapper`: Inner menu container
- `.menu-header`: Menu title section
- `.menu-content`: Menu items container
- `.menu-item`: Individual menu option
- `.menu-divider`: Separator line

### Terminal
- `.terminal-container`: Main terminal window
- `.terminal-header`: Title bar with controls
- `.terminal-controls`: Control buttons container
- `.terminal-button`: Base button style
- `.terminal-close`: Close button (red)
- `.terminal-maximize`: Maximize button (green)
- `.terminal-content`: Terminal output area
- `.terminal-input-line`: Input line wrapper
- `.terminal-prompt`: Command prompt
- `.terminal-input`: Command input field

### Glass Morphism
```css
.glass-effect {
    background: var(--bg-primary);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 10px;
}
```

### Theme Variables
```css
:root {
    --bg-primary: rgba(28, 39, 49, 0.95);
    --bg-secondary: rgba(28, 39, 49, 0.98);
    --border-color: rgba(255, 255, 255, 0.1);
    --text-primary: rgba(255, 255, 255, 0.9);
    --text-secondary: rgba(255, 255, 255, 0.7);
}
```

## Widget Quick Reference

### Notes Widget
- ID: `notes`
- Classes: `.notes-app`, `.notes-list`, `.note-item`
- Storage: `localStorage.notes`

### Todo Widget
- ID: `todo`
- Classes: `.todo-app`, `.todo-list`, `.todo-item`
- Storage: `localStorage.todos`

### Pomodoro Widget
- ID: `pomodoro`
- Classes: `.pomodoro-app`, `.pomodoro-display`
- Timer: 25 minutes default

### Music Widget
- ID: `music`
- Classes: `.sound-player`, `.sound-slider`
- YouTube IDs stored in `youtubeVideos` object

### Background Widget
- ID: `screen`
- Classes: `.background-switcher`, `.bg-option`
- Images defined in `backgrounds` object

## Common Tasks

### Adding a New Widget
1. Add entry to `widgets` object:
```javascript
widgets.newWidget = {
    title: 'Widget Name',
    content: `<div class="widget-content">...</div>`
};
```
2. Add icon to left dock:
```html
<a class="app-link" data-app-type="widget" data-widget-id="newWidget">
    <div class="app-wrapper">
        <svg class="app-icon">...</svg>
        <span class="app-name">Name</span>
    </div>
</a>
```

### Adding External App
```html
<a href="URL" class="app-link" data-app-type="external" target="_blank">
    <div class="app-wrapper">
        <svg class="app-icon">...</svg>
        <span class="app-name">App Name</span>
    </div>
</a>
```

### Terminal Commands
```bash
help      # Show available commands
clear     # Clear terminal
ls        # List apps and widgets
date      # Show current date/time
whoami    # Show current user
echo      # Print text
nano      # Text editor
```

## Event Handlers
- `.terminal-input`: keydown (Enter, ArrowUp, ArrowDown)
- `.app-link`: click, dragstart, dragend
- `.widget-header`: mousedown (drag)
- `.widget-close`: click
- `.menu-item`: click