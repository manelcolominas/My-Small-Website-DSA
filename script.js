    $(document).ready(function() {
      $("#getRepos").click(function() {
        let username = $("#username").val();
        let url = `https://api.github.com/users/${username}/repos`;

        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          success: function(repos) {
            $("#repoList").empty();
            repos.forEach(function(repo) {
              $("#repoList").append(`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
            });
          },
          error: function() {
            alert("User not found or error fetching repos.");
          }
        });
      });
    });