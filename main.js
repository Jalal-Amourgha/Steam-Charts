// Chart Options
let horizontal = false;
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#ffffff",
    foreColor: "#333",
  },
  series: [
    {
      name: "Players",
      data: [
        817199, 580081, 249043, 159349, 108042, 98319, 85207, 78416, 75176,
        73816,
      ],
    },
  ],
  xaxis: {
    categories: [
      "Counter-Strike 2",
      "Dota 2",
      "PUBG",
      "Apex Legends",
      "GTA V",
      "Call of Duty",
      "Baldur's Gate 3",
      "Rust",
      "NARAKA",
      "Lost Ark",
    ],
  },
  plotOptions: {
    bar: {
      horizontal: horizontal,
    },
  },
  fill: {
    colors: ["#4375f3"],
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Most played games on Steam in November 2023",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
      color: "#4375f3",
    },
  },
};

// Init Chart
const chart = new ApexCharts(document.getElementById("root"), options);

// Render Chart
chart.render();

// Change To Horizontal Mode
document.querySelector("button").addEventListener("click", () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: !horizontal,
      },
    },
  });
  horizontal = !horizontal;

  document.querySelector("button").innerHTML === "Horizontal"
    ? (document.querySelector("button").innerHTML = "Vertical")
    : (document.querySelector("button").innerHTML = "Horizontal");
});

// Check the screen width on resize
window.addEventListener("resize", function () {
  if (window.innerWidth < 765) {
    chart.updateOptions({
      title: {
        style: {
          fontSize: "18px",
        },
      },
    });
  } else {
    chart.updateOptions({
      title: {
        style: {
          fontSize: "25px",
        },
      },
    });
  }
});
