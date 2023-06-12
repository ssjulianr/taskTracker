// const express = require('express');
// const fs = require('fs');

// const app = express();

// app.get('/', (req, res) => {
//   // Read the HTML file
//   fs.readFile('index.html', 'utf8', (err, htmlContent) => {
//     if (err) {
//       console.error('Error reading HTML file:', err);
//       return res.status(500).send('Internal Server Error');
//     }

//     // Read the CSS file
//     fs.readFile('styles.css', 'utf8', (err, cssContent) => {
//       if (err) {
//         console.error('Error reading CSS file:', err);
//         return res.status(500).send('Internal Server Error');
//       }

//       // Read the JavaScript file
//       fs.readFile('script.js', 'utf8', (err, jsContent) => {
//         if (err) {
//           console.error('Error reading JavaScript file:', err);
//           return res.status(500).send('Internal Server Error');
//         }

//         // Combine the HTML, CSS, and JavaScript content
//         const combinedContent = `
//           <style>${cssContent}</style>
//           ${htmlContent}
//           <script>${jsContent}</script>
//         `;

//         // Set the content type as HTML
//         res.setHeader('Content-Type', 'text/html');
//         // Send the combined content as the response
//         res.send(combinedContent);
//       });
//     });
//   });
// });

// app.listen(600, () => {
//   console.log('Server is running on port 600');
// });



const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/', (req, res) => {
  // Read the HTML file
  fs.readFile('index.html', 'utf8', (err, htmlContent) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Read the CSS file
    fs.readFile('styles.css', 'utf8', (err, cssContent) => {
      if (err) {
        console.error('Error reading CSS file:', err);
        return res.status(500).send('Internal Server Error');
      }

      // Read the JavaScript file
      fs.readFile('script.js', 'utf8', (err, jsContent) => {
        if (err) {
          console.error('Error reading JavaScript file:', err);
          return res.status(500).send('Internal Server Error');
        }

        // Combine the HTML, CSS, and JavaScript content
        const combinedContent = `
          <style>${cssContent}</style>
          ${htmlContent}
          <script>${jsContent}</script>
        `;

        // Set the content type as HTML
        res.setHeader('Content-Type', 'text/html');
        // Send the combined content as the response
        res.send(combinedContent);
      });
    });
  });
});


// GET request handler
app.get('/', (req, res) => {
  // Read the todos.json file
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data
    const todos = JSON.parse(data);

    // Send the todos as the response
    res.json(todos);
  });
});

// POST request handler
app.post('/', (req, res) => {
  // Read the tasks.json file
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data
    const todos = JSON.parse(data);

    // Add the new todo
    const newTodo = req.body;
    todos.push(newTodo);

    // Write the updated todos to the file
    fs.writeFile('tasks.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Error writing todos:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Send the updated todos as the response
      res.json(todos);
    });
  });
});

// PUT request handler
app.put('/todos/:id', (req, res) => {
  // Read the tasks.json file
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data
    const todos = JSON.parse(data);

    // Find the todo to update
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    // Return error if todo is not found
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Update the todo
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };

    // Write the updated todos to the file
    fs.writeFile('tasks.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Error writing todos:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Send the updated todos as the response
      res.json(todos);
    });
  });
});

// DELETE request handler
app.delete('/:id', (req, res) => {
  // Read the tasks.json file
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data
    const todos = JSON.parse(data);

    // Find the todo to delete
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    // Return error if todo is not found
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Remove the todo
    todos.splice(todoIndex, 1);

    // Write the updated todos to the file
    fs.writeFile('tasks.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Error writing todos:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Send the updated todos as the response
      res.json(todos);
    });
  });
});

// Start the server
app.listen(2000, () => {
  console.log('Server is running on port 600');
});
