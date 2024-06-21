// Obtener el contenedor del gráfico
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '% de conocimiento',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}% ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Conocimiento',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 80, name: 'Html' },
        { value: 70, name: 'Css' },
        { value: 60, name: 'Python' },
        { value: 60, name: 'Java Script' },
        { value: 70, name: 'type script' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);


