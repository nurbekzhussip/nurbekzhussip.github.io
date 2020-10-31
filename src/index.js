import './scss/index.scss'

const { socialblade } = require('socialblade-com-api')
 
async function getChannelStat(channelId) {
    console.log('start')
    const response = await socialblade('http://api.scraperapi.com?api_key=70e07ec7c0a26b552b3ba8cb29795b5e&url=', 'youtube', channelId)
    console.log(response)
    debugger
}

//getChannelStat('UCNqktdxgAADBj36dC7VGOgg')


function tableHTML(){
    return  `
    <div class="container">
    <h6>Data Visualization</h6>
    <div class="header">
      <p>Top 25 YouTube Users by Subscribers</p>
    </div>
    <div class="table">
      <div class="table__nav">
        <div class="row">
          <div class="col-lg-3">DISPLAY NAME</div>
          <div class="col-lg-3">VIDEOS</div>
          <div class="col-lg-3">SUBSCRIBERS</div>
          <div class="col-lg-3">VIEWS</div>
        </div>
      </div>
      <div class="tab__content">
        <div class="tab__content-item">
          <div class="row">
            <div class="item-title col-lg-3"><a href="#">Аминка Витаминка</a> </div>
            <div class="col-lg-3">14,720</div>
            <div class="col-lg-3">5M</div>
            <div class="col-lg-3">3 115 673 460</div>
          </div>
        </div>
        <div class="tab__content-item">
          <div class="row">
            <div class="item-title col-lg-3"><a href="#">Pazl</a> </div>
            <div class="col-lg-3">14,720</div>
            <div class="col-lg-3">5M</div>
            <div class="col-lg-3">3 115 673 460</div>
          </div>
        </div>
        <div class="tab__content-item">
          <div class="row">
            <div class="item-title col-lg-3"><a href="#">Ekaterina Saibel</a> </div>
            <div class="col-lg-3">14,720</div>
            <div class="col-lg-3">5M</div>
            <div class="col-lg-3">3 115 673 460</div>
          </div>
        </div>

        <div class="tab__content-item">
          <div class="row">
            <div class="item-title col-lg-3"><a href="#">Еда на любой Вкус</a> </div>
            <div class="col-lg-3">14,720</div>
            <div class="col-lg-3">5M</div>
            <div class="col-lg-3">3 115 673 460</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
}


//document.getElementById("app").innerHTML = profileHTML()
