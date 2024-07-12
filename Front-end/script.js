document
  .getElementById("formUser")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log(user);
        alert("Utilisateur ajouté");
      } else {
        console.log(user)
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue");
    }
  });
