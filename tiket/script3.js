function myFunction(type) {
    var txt;
    var nama1 = document.getElementById("icon").value;
    if (confirm("Apakah anda yakin membeli?")) {
      txt = "Terima kasih telah membeli tiket konser " + type;
    } else {
      txt = "Oke gapapa!";
    }
    alert (txt);
  }
  
