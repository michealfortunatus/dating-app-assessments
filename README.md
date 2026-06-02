# Matchly – React Native Dating App Assessment

## Project Overview

Matchly is a Tinder-inspired mobile dating application built with React Native Expo and TypeScript. The application demonstrates modern React Native development practices, reusable component architecture, gesture-based interactions, responsive layouts, and maintainable code organization.

The project was developed as part of a technical assessment for a Lead/Senior React Native Developer role, with a focus on clean architecture, user experience, code quality, and adherence to project requirements.

---

## Features

### Core Features

* Welcome / Onboarding Screen
* Tinder-style swipe experience
* Swipe left and swipe right interactions
* Smooth card animations and gesture handling
* Profile Details Screen
* Match simulation workflow
* Responsive mobile layouts
* Reusable UI components
* TypeScript support

### Additional Features

* Bottom Tab Navigation
* Centralized design system
* Consistent color palette and typography
* Strongly typed data models
* Modular folder structure
* Scalable architecture for future feature expansion

---

## Technology Stack

### Framework

* React Native Expo

### Language

* TypeScript

### Navigation

* React Navigation
* Native Stack Navigator
* Bottom Tab Navigator

### Gesture Handling

* React Native Deck Swiper

### State Management

* React Hooks (`useState`, `useMemo`, `useCallback`)

### Development Tools

* Expo CLI
* ESLint
* TypeScript Compiler

---

## Architecture

The application follows a feature-oriented structure that promotes maintainability, scalability, and separation of concerns.

```text
src/
├── assets/
├── components/
│   ├── AppButton
│   └── ProfileCard
├── constants/
│   ├── colors
│   └── theme
├── data/
│   └── profiles
├── hooks/
├── navigation/
│   ├── AppNavigator
│   └── BottomTabs
├── screens/
│   ├── WelcomeScreen
│   ├── DiscoverScreen
│   ├── ProfileDetailsScreen
│   ├── LikesScreen
│   ├── ChatsScreen
│   └── UserProfileScreen
├── types/
└── utils/
```

### Design Principles

* Reusable Components
* Single Responsibility Principle
* Type Safety
* Separation of UI and Business Logic
* Scalable Navigation Structure
* Consistent Styling Strategy

---

## Application Flow

1. User launches the application.
2. Welcome screen introduces the application.
3. User enters the Discover screen.
4. Profiles are presented as swipeable cards.
5. Swiping right triggers a potential match action.
6. Selecting a profile opens the Profile Details screen.
7. User can explore profile information and interactions.

---

## State Management Decisions

The application uses React's built-in state management through hooks.

This approach was chosen because:

* Application complexity is relatively small.
* No backend synchronization is required.
* Global state requirements are minimal.
* It avoids unnecessary dependencies.

For larger-scale production systems, Redux Toolkit, Zustand, or React Query would be considered depending on business requirements.

---

## Reusable Components

### ProfileCard

Reusable profile presentation component responsible for displaying:

* Profile image
* Name
* Age
* Biography
* Interests

### AppButton

Reusable button component used throughout the application to ensure UI consistency.

---

## Assumptions

* User profile data is mocked locally.
* Match events are simulated.
* No server communication is required.
* User authentication is outside the scope of the assessment.
* Messaging functionality is not required by the specification.

---

## Known Limitations

* No backend integration.
* No persistent user sessions.
* No real-time messaging.
* No profile editing functionality.
* No push notifications.
* Matches are simulated using mock data.

---

## Future Improvements

Potential enhancements for a production-ready version:

### Authentication

* Email/password authentication
* Google Sign-In
* Apple Sign-In

### Backend Integration

* REST API integration
* GraphQL support
* Cloud database synchronization

### Real-Time Features

* Messaging
* Presence indicators
* Typing indicators

### User Experience

* Profile filters
* Match history
* Super Likes
* Premium subscriptions

### Performance

* Image caching
* Offline support
* Analytics integration

---

## Installation

### Prerequisites

* Node.js (v18 or newer)
* npm
* Expo CLI

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

### Launch Application

Android Emulator:

```bash
a
```

iOS Simulator (macOS):

```bash
i
```

Physical Device:

* Install Expo Go
* Scan the generated QR code

---

## APK Download

Google Drive Folder:

https://drive.google.com/drive/folders/1P5MisB2JzQSxZCUybHRR8tPTxAqj0UOY?usp=sharing

### Installation Steps

1. Open the Google Drive folder.
2. Download the latest APK.
3. Enable installation from unknown sources if prompted.
4. Install the APK.
5. Launch Matchly from your device.

---

## Repository

GitHub Repository:

https://github.com/michealfortunatus/dating-app-assessments

---

## Assessment Requirements Checklist

* React Native Expo ✔
* TypeScript ✔
* Three Required Screens ✔
* Tinder-Style Swipe Interaction ✔
* Minimalistic UI ✔
* Responsive Design ✔
* APK Generated ✔
* APK Available via Google Drive ✔
* README Documentation ✔
* Reusable Components ✔
* Modern React Practices ✔

---

## Author

Fortunatus Eso

Lead/Senior React Native Developer Assessment Submission
