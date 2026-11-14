const app = new Vue({
  el: "#usuarios",
  data() {
    return {
      users: [],
      loading: true,
      error: ""
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      this.loading = true;
      this.error = "";

      try {
        const resposta = await fetch("https://reqres.in/api/users?per_page=10", {
          headers: {
            "x-api-key": "reqres-free-v1"
          }
        });

        if (!resposta.ok) {
          throw new Error("A API respondeu com status " + resposta.status + ".");
        }

        const dados = await resposta.json();
        this.users = Array.isArray(dados.data) ? dados.data : [];
        if (this.users.length === 0) {
          this.error = "A API não retornou usuários nesta consulta.";
        }
      } catch (erro) {
        this.error = "Não foi possível carregar os usuários. Verifique sua conexão e tente novamente. " + erro.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
