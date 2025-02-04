
window.onload = function () {
// Gráfico de Vendas por Mês
const ctx1 = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [
            {
                label: 'Vendas em Quantidade',
                data: [1000, 1200, 900, 1500, 1100],
                backgroundColor: '#D500F9',
                borderColor: '#9C27B0',
                borderWidth: 1
            },
            {
                label: 'Vendas em R$',
                data: [10000, 12000, 9000, 15000, 11000],
                backgroundColor: '#FF4081',
                borderColor: '#F50057',
                borderWidth: 1
            },
            {
                label: 'Meta de Vendas',
                data: [11000, 13000, 10000, 16000, 12000],
                backgroundColor: '#880E4F',
                borderColor: '#9C27B0',
                borderWidth: 1
            },
            {
                label: 'Comparação com Mês Anterior',
                data: [1500, 1400, 1600, 1550, 1450],
                backgroundColor: '#00C853',
                borderColor: '#1B5E20',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: '#f5f5f5', // Cor dos rótulos no eixo X
                }
            },
            y: {
                ticks: {
                    color: '#f5f5f5', // Cor dos números no eixo Y
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#f5f5f5', // Cor das legendas
                }
            }
        }
    }
});



    // Gráfico de Distribuição de Usuários
var ctx2 = document.getElementById('usersChart').getContext('2d');
var usersChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Brasil', 'EUA', 'Alemanha', 'França'],
        datasets: [{
            label: 'Usuários',
            data: [120, 80, 50, 30],
            backgroundColor: ['#32CD32', '#544dfd', '#FFD700', '#FF69B4'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,  // Força o gráfico a não manter a proporção
        plugins: {
            legend: {
                position: 'right',  // Coloca a legenda à direita do gráfico
                labels: {
                    color: '#f5f5f5', // Cor das legendas no gráfico
                    padding: 20, // Distância da legenda em relação ao gráfico
                    boxWidth: 20,  // Ajusta o tamanho do quadrado colorido da legenda
                }
            },
        },
        aspectRatio: 1, // Força o gráfico a ter uma proporção 1:1 (como um círculo)
    }
});


};
