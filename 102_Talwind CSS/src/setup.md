## How to Setup Tailwind CSS?

Step 1 - Run The Following Command

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2 - Update tailwind.config.js to include tgus line
```
content: ["*.html"]
```

Step 3 - Create src/input.css to include
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4 - include the ouput.css to html

Step 5 - Run The Following Command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```


Further Information About Responsive Design BreakPoints
```
Modifier	Media query
max-sm	@media not all and (min-width: 640px) { ... }
max-md	@media not all and (min-width: 768px) { ... }
max-lg	@media not all and (min-width: 1024px) { ... }
max-xl	@media not all and (min-width: 1280px) { ... }
max-2xl	@media not all and (min-width: 1536px) { ... }

```
