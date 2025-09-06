//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  statusbar: {
    iosOverlaysWebView: true,
  },
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },

  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: false,
      options: {
        transition: 'f7-fade'
      },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link2/',
      url: 'link2.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
        var gauge = app.gauge.create({
        el: '.gauge',
        value: 0.4,
        type: 'circle',
        size: 450,
        valueText: '40%',
        valueFontSize: 64,
        valueFontWeight: 700,
        valueTextColor: '#278cd6',
        borderColor: '#278cd6',
        borderBgColor: '#d4e6f7',
        borderWidth: 24,
        
        on: {
          beforeDestroy: function () {
            console.log('Gauge will be destroyed')
          }
        }
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
    if (gauge) {
        gauge.destroy();
        gauge = null;
    }
		},
	  }
    },
    {
      path: '/link3/',
      url: 'link3.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida

		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
        
        var gauge = app.gauge.create({
        el: '.gauge',
        value: 0.4,
        type: 'circle',
        size: 450,
        valueText: '40%',
        valueFontSize: 64,
        valueFontWeight: 700,
        valueTextColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderBgColor: '#DFF4DD',
        borderWidth: 24,
        
        on: {
          beforeDestroy: function () {
            console.log('Gauge will be destroyed')
          }
        }
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
    if (gauge) {
        gauge.destroy();
        gauge = null;
    }
		},
	  }
    },
  ],
  // ... other parameters
});

//Para testes direto no navegador
//var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}


