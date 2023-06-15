# React Table Component

This is a reusable React Search component that is mobile-compliant and built with Ionic components.

## Installation

To use this component in your project, follow these steps:

1. Install the package from npm:

```bash
   npm install --save hasan-react-ionic-search-component 
```

2. Import

```jsx
import { Search } from 'hasan-react-ionic-search-component';
```

3. Create

```ts

const App: React.FC = () => {
  // Sample data for the search component
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Durian',
    'Elderberry',
    'Fig',
    'Grapefruit',
  ];

  return (
    <div>
      <h1>Search Example</h1>
      <Search data={data} />
    </div>
  );
};

export default App;
```
