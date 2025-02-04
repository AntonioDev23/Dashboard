

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
                    backgroundColor: '#D500F9', // Roxo vibrante
                    borderColor: '#9C27B0',
                    borderWidth: 1
                },
                {
                    label: 'Vendas em R$',
                    data: [10000, 12000, 9000, 15000, 11000],
                    backgroundColor: '#FF4081', // Rosa vibrante
                    borderColor: '#F50057',
                    borderWidth: 1
                },
                {
                    label: 'Meta de Vendas',
                    data: [11000, 13000, 10000, 16000, 12000],
                    backgroundColor: '#880E4F', // Vinho
                    borderColor: '#9C27B0',
                    borderWidth: 1
                },
                {
                    label: 'Comparação com Mês Anterior',
                    data: [1500, 1400, 1600, 1550, 1450],
                    backgroundColor: '#00C853', // Verde
                    borderColor: '#1B5E20',
                    borderWidth: 1
                }
            ]
        }
    });

    // Gráfico de Distribuição de Usuários
    const ctx2 = document.getElementById('usersChart').getContext('2d');
    const usersChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Brasil', 'EUA', 'Alemanha', 'França'],
            datasets: [{
                label: 'Usuários',
                data: [120, 80, 50, 30],
                backgroundColor: ['#FF4081', '#9C27B0', '#880E4F', '#D500F9'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#f5f5f5', // Cor das legendas
                    }
                },
            }
        }
    });
};
