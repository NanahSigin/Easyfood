const API_URL = "http://localhost:3000";

const RESTAURANTS_URL =
    `${API_URL}/restaurants`;

const LOGIN_URL =
    `${API_URL}/auth/login`;

const REGISTER_URL =
    `${API_URL}/auth/register`;


// =========================
// ELEMENTOS
// =========================

const restaurantList =
    document.getElementById(
        "restaurant-list"
    );


const loginForm =
    document.getElementById(
        "login-form"
    );


const registerForm =
    document.getElementById(
        "register-form"
    );


const restaurantForm =
    document.getElementById(
        "restaurant-form"
    );


const loginMessage =
    document.getElementById(
        "login-message"
    );


const registerMessage =
    document.getElementById(
        "register-message"
    );


const restaurantMessage =
    document.getElementById(
        "restaurant-message"
    );


const userSection =
    document.getElementById(
        "user-section"
    );


const restaurantRegister =
    document.getElementById(
        "restaurant-register"
    );


const userName =
    document.getElementById(
        "user-name"
    );


const userEmail =
    document.getElementById(
        "user-email"
    );


const logoutButton =
    document.getElementById(
        "logout-button"
    );


const loginSection =
    document.getElementById(
        "login"
    );


const registerSection =
    document.getElementById(
        "register"
    );


const loginLink =
    document.getElementById(
        "login-link"
    );


const registerLink =
    document.getElementById(
        "register-link"
    );



// =========================
// CLASSIFICAÇÃO
// =========================

function criarClassificacao(rating) {

    const nota =
        Math.round(
            Number(rating)
        );


    let doces = "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (i <= nota) {

            doces += "🧁";

        } else {

            doces += "♡";

        }

    }


    return doces;
}



// =========================
// CARREGAR RESTAURANTES
// =========================

async function carregarRestaurantes() {

    try {

        const resposta =
            await fetch(
                RESTAURANTS_URL
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar restaurantes"
            );

        }


        const restaurantes =
            await resposta.json();


        restaurantList.innerHTML = "";


        if (
            restaurantes.length === 0
        ) {

            restaurantList.innerHTML = `

                <p class="loading">
                    Nenhum restaurante cadastrado.
                </p>

            `;

            return;
        }


        restaurantes.forEach(
            restaurante => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.classList.add(
                    "restaurant-card"
                );


                card.innerHTML = `

                    <h3>
                        ${restaurante.name}
                    </h3>


                    <p>
                        Categoria:
                        ${restaurante.category}
                    </p>


                    <p class="rating">
                        ${criarClassificacao(
                            restaurante.rating
                        )}
                    </p>


                    <p>
                        Nota:
                        ${restaurante.rating}
                    </p>

                `;


                restaurantList.appendChild(
                    card
                );

            }
        );


    } catch (erro) {

        console.error(erro);


        restaurantList.innerHTML = `

            <p class="loading">
                Não foi possível carregar os restaurantes.
            </p>

        `;

    }

}



// =========================
// LOGIN
// =========================

loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "login-email"
            ).value;


        const password =
            document.getElementById(
                "login-password"
            ).value;


        loginMessage.textContent =
            "Entrando...";


        try {

            const resposta =
                await fetch(
                    LOGIN_URL,
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                email,
                                password

                            })

                    }
                );


            const dados =
                await resposta.json();


            if (!resposta.ok) {

                loginMessage.textContent =
                    dados.error ||
                    "E-mail ou senha inválidos.";

                return;
            }


            // SALVAR TOKEN

            localStorage.setItem(
                "token",
                dados.token
            );


            // SALVAR USUÁRIO

            localStorage.setItem(
                "user",
                JSON.stringify(
                    dados.user
                )
            );


            loginForm.reset();


            // ATUALIZAR TELA

            atualizarInterface();


            // VOLTAR PARA O TOPO

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


        } catch (erro) {

            console.error(erro);


            loginMessage.textContent =
                "Não foi possível conectar ao servidor.";

        }

    }
);



// =========================
// CRIAR CONTA
// =========================

registerForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "register-name"
            ).value;


        const email =
            document.getElementById(
                "register-email"
            ).value;


        const password =
            document.getElementById(
                "register-password"
            ).value;


        registerMessage.textContent =
            "Criando conta...";


        try {

            const resposta =
                await fetch(
                    REGISTER_URL,
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                name,
                                email,
                                password

                            })

                    }
                );


            const dados =
                await resposta.json();


            if (!resposta.ok) {

                registerMessage.textContent =
                    dados.error ||
                    "Não foi possível criar a conta.";

                return;
            }


            registerMessage.textContent =
                "Conta criada com sucesso! ♡";


            registerForm.reset();


            document.getElementById(
                "login-email"
            ).value = email;


            document
                .getElementById("login")
                .scrollIntoView({

                    behavior:
                        "smooth"

                });


        } catch (erro) {

            console.error(erro);


            registerMessage.textContent =
                "Não foi possível conectar ao servidor.";

        }

    }
);



// =========================
// CADASTRAR RESTAURANTE
// =========================

restaurantForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const token =
            localStorage.getItem(
                "token"
            );


        if (!token) {

            restaurantMessage.textContent =
                "Você precisa fazer login primeiro.";

            return;
        }


        const name =
            document.getElementById(
                "restaurant-name"
            ).value;


        const category =
            document.getElementById(
                "restaurant-category"
            ).value;


        const rating =
            Number(
                document.getElementById(
                    "restaurant-rating"
                ).value
            );


        restaurantMessage.textContent =
            "Cadastrando...";


        try {

            const resposta =
                await fetch(
                    RESTAURANTS_URL,
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json",

                            "Authorization":
                                `Bearer ${token}`

                        },

                        body:
                            JSON.stringify({

                                name,
                                category,
                                rating

                            })

                    }
                );


            const dados =
                await resposta.json();


            if (!resposta.ok) {

                restaurantMessage.textContent =
                    dados.error ||
                    "Não foi possível cadastrar.";

                return;
            }


            restaurantMessage.textContent =
                "Restaurante cadastrado com sucesso! ♡";


            restaurantForm.reset();


            carregarRestaurantes();


        } catch (erro) {

            console.error(erro);


            restaurantMessage.textContent =
                "Não foi possível conectar ao servidor.";

        }

    }
);



// =========================
// SAIR DA CONTA
// =========================

logoutButton.addEventListener(
    "click",
    function() {

        localStorage.removeItem(
            "token"
        );


        localStorage.removeItem(
            "user"
        );


        atualizarInterface();


        loginMessage.textContent =
            "Você saiu da sua conta.";

    }
);



// =========================
// ATUALIZAR INTERFACE
// =========================

function atualizarInterface() {

    const token =
        localStorage.getItem(
            "token"
        );


    const userStorage =
        localStorage.getItem(
            "user"
        );


    // =========================
    // USUÁRIO LOGADO
    // =========================

    if (
        token &&
        userStorage
    ) {

        const user =
            JSON.parse(
                userStorage
            );


        // Mostrar conta

        userSection.classList.remove(
            "hidden"
        );


        // Mostrar cadastro de restaurante

        restaurantRegister.classList.remove(
            "hidden"
        );


        // ESCONDER LOGIN

        loginSection.classList.add(
            "hidden"
        );


        // ESCONDER CADASTRO

        registerSection.classList.add(
            "hidden"
        );


        // ESCONDER LINKS DO MENU

        loginLink.classList.add(
            "hidden"
        );


        registerLink.classList.add(
            "hidden"
        );


        // MOSTRAR DADOS

        userName.textContent =
            user.name;


        userEmail.textContent =
            user.email;

    }


    // =========================
    // USUÁRIO DESLOGADO
    // =========================

    else {

        // Esconder conta

        userSection.classList.add(
            "hidden"
        );


        // Esconder cadastro restaurante

        restaurantRegister.classList.add(
            "hidden"
        );


        // Mostrar login

        loginSection.classList.remove(
            "hidden"
        );


        // Mostrar cadastro

        registerSection.classList.remove(
            "hidden"
        );


        // Mostrar links

        loginLink.classList.remove(
            "hidden"
        );


        registerLink.classList.remove(
            "hidden"
        );

    }

}



// =========================
// INICIAR
// =========================

carregarRestaurantes();

atualizarInterface();