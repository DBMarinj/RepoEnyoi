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
        { value: 75, name: 'Html' },
        { value: 70, name: 'Css' },
        { value: 65, name: 'Python + django' },
        { value: 65, name: 'React JS' },
        { value: 70, name: 'Bd con Postgress' }
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


