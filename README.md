# GOAL

The goal of this repo is to practice the usage of the strategy pattern

# REFERENCE

https://www.youtube.com/watch?v=DAnhRjEEHMI&ab_channel=DevSoutinho

# STRATEGY PATTERN

*Strategy Pattern is a way to not need to change the base component but change some behaviour dynamically from the ouside*

# SAMPLE

```jsx
class Gol {
  autonomia(...) {
    // ...
    return 9.0;
  }
}

class Polo {
  autonomia(...) {
    // ...
    return 8.0;
  }
}

// w/a strategy
const gol = new Gol();
gol.autonomia();

const polo = new Gol();
polo.autonomia();

// w/ strategy
class Autonomia {
  this.veiculo = null;

  definirVeiculo(veiculo) {
    this.veiculo = veiculo
  }

  calcular(...) {
    return this.veiculo.autonomia(...);
  }
}

const autonomia = new Autonomia();
autonomia.definirVeiculo(gol);
autonomia.calcular();

const autonomia = new Autonomia();
autonomia.definirVeiculo(polo);
autonomia.calcular();
```

# MISTAKES

*A component that knows too many details*

It is tempting to create a specialized component that consumes data directly from one endpoint and outputs UI.

This approach is coupling UI, data and business logic into one component.

Reusing the component with a slightly different layout will be complicated.

You will be forced to create many props and if statements inside the component for every use case of slightly different layout or data.

# PURE COMPONENTS

Component should be highly composable and extendible.

# STYLED

- Are concerned with *only* *how things look*.
- Often only use *props.children*

**`h1, section, div, span, Icon*(may contain className, and accessibility attributes)`**

# PRESENTATIONAL

- Are concerned with *how things look*.
- Receive data and callbacks exclusively via props.

**`Avatar, Info, List`**

# CONTAINER PRESENTER

- Are concerned with *how things look*
- Can have lifecycle methods

**`UserPagePresenter, UserListPresenter`**

# CONTAINER COMPONENTS

- Are concerned with *how things work*.
- Often connected to the redux or have own state
- Provide the data and behavior to presentational or other container components.

**`UserPage, UserList`**
