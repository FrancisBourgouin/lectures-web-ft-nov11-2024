# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Array:
Good: Easy to loop over an array
Bad: Hard to find a specific element inside array (More slow than hard)

Object:
Good: Easy to find a specific element (by key)
Bad: Kinda bad at iterating (Slow, not hard)

```js
const thievesArr = [thief, thief];
const thievesObj = { 1: thief, 2: thief };
```

## Seed

```jsx
const thief1 = {
  id: 1,
  email: "gentleman@cambrioleur.com",
  name: "Arsène Lupin",
  password: "tophat",
  imagePath: "/images/arsene.gif",
};

const thief2 = {
  id: 2,
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: "rosa",
  imagePath: "/images/doug.webp",
};

const thievesArr = [thief1, thief2];
const thievesObj = { "gentleman@cambrioleur.com": thief1, "pontiac@bandit.com": thief2 };
```

## Structure

### Helpers!

### HTML
