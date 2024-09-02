$(function () {
  var newsList = [
    {
      id: 28,
      title: 'Mr.Car聚合充电服务上线啦！找桩到报销全搞定',
      create_time: '2024-07-31 18:01',
      publish_time: '2024-07-31 18:01',
      news_time: '2024-07-31 18:01',
      coverImg: './newsImg/28/cover.png'
    },
    {
      id: 27,
      title: '荣誉+1 Mr.Car研发创新实力再获认可',
      create_time: '2024-07-23 11:30',
      publish_time: '2024-07-23 11:30',
      news_time: '2024-07-23 11:30',
      coverImg: './newsImg/27/cover.png'
    },
    {
      id: 26,
      title: '车队半年总结不焦虑，“管车”搭子来救急',
      create_time: '2024-06-14 17:00',
      publish_time: '2024-06-14 17:00',
      news_time: '2024-06-14 17:00',
      coverImg: './newsImg/26/cover.png'
    },
    {
      id: 25,
      title: '省心省力的首汽维保托管服务，你用车我管车！',
      create_time: '2024-05-21 17:00',
      publish_time: '2024-05-21 17:00',
      news_time: '2024-05-21 17:00',
      coverImg: './newsImg/25/cover.jpg'
    },
    {
      id: 24,
      title: '首汽租车Mr.Car获评中国软件行业协会首批“新质生产力年度创新实践”',
      create_time: '2024-05-10 17:00',
      publish_time: '2024-05-10 17:00',
      news_time: '2024-05-10 17:00',
      coverImg: './newsImg/24/cover.jpg'
    },
    {
      id: 23,
      title: '都2024年了，工程项目用车还在人工管？',
      create_time: '2024-03-15 18:30',
      publish_time: '2024-03-15 18:30',
      news_time: '2024-03-15 18:30',
      coverImg: './newsImg/23/cover.jpg'
    },
    {
      id: 22,
      title: '物流企业管车不想白费功夫，就得把这事做了',
      create_time: '2024-03-08 15:18',
      publish_time: '2024-03-08 15:18',
      news_time: '2024-03-08 15:18',
      coverImg: './newsImg/22/cover.jpg'
    },
    {
      id: 21,
      title: '开工后管车效率想翻倍？先打通这4个环节！',
      create_time: '2024-02-28 17:00',
      publish_time: '2024-02-28 17:00',
      news_time: '2024-02-28 17:00',
      coverImg: './newsImg/21/cover.png'
    },
    {
      id: 20,
      title: '找到了！汽车租赁公司车辆管理的抓手',
      create_time: '2024-01-25 17:00',
      publish_time: '2024-01-25 17:00',
      news_time: '2024-01-25 17:00',
      coverImg: './newsImg/20/cover.jpg'
    },
    {
      id: 19,
      title: '重磅试点开启，Mr.Car分时租赁为公务用车保驾护航',
      create_time: '2024-01-18 18:05',
      publish_time: '2024-01-18 18:05',
      news_time: '2024-01-18 18:05',
      coverImg: './newsImg/19/cover.png'
    },
    {
      id: 18,
      title: '赋能蓄势，加速进化|Mr.Car2023年度盘点',
      create_time: '2023-12-28 17:02',
      publish_time: '2023-12-28 17:02',
      news_time: '2023-12-28 17:02',
      coverImg: './newsImg/18/cover.png'
    },
    {
      id: 17,
      title: '媒体聚焦|Mr.Car做的这件事儿，云南卫视、丽江日报等主流媒体都在关注！',
      create_time: '2023-12-14 12:01',
      publish_time: '2023-12-14 12:01',
      news_time: '2023-12-14 12:01',
      coverImg: './newsImg/17/cover.jpg'
    },
    {
      id: 16,
      title: '开了“外挂”的车辆管理工作能有多丝滑？',
      create_time: '2023-12-01 21:25',
      publish_time: '2023-12-01 21:25',
      news_time: '2023-12-01 21:25',
      coverImg: './newsImg/16/cover.png'
    },
    {
      id: 15,
      title: '首旅创新｜首汽租赁：Mr.Car以科技推动公车改革，打造用车模式的新场景新应用',
      create_time: '2023-11-24 18:12',
      publish_time: '2023-11-24 18:12',
      news_time: '2023-11-24 18:12',
      coverImg: './newsImg/15/cover.png'
    },
    {
      id: 14,
      title: 'Mr.Car又获奖啦|助力企业数字化管车，入选《2023采购数智化服务商图谱》',
      create_time: '2023-11-23 18:01',
      publish_time: '2023-11-23 18:01',
      news_time: '2023-11-23 18:01',
      coverImg: './newsImg/14/cover.jpg'
    },
    {
      id: 13,
      title: '新升级|Mr.Car超实用“车辆大屏”上线，实时监管一屏统筹',
      create_time: '2023-11-03 12:00',
      publish_time: '2023-11-03 12:00',
      news_time: '2023-11-03 12:00',
      coverImg: './newsImg/13/cover.png'
    },
    {
      id: 12,
      title: '首汽租车Mr.Car数字化用车服务平台荣获第二届“光华杯”三等奖',
      create_time: '2023-10-26 18:00',
      publish_time: '2023-10-26 18:00',
      news_time: '2023-10-26 18:00',
      coverImg: './newsImg/12/cover.png'
    },
    {
      id: 11,
      title: '任凭油价涨跌，Mr.Car帮您轻松管油控费',
      create_time: '2023-10-20 12:04',
      publish_time: '2023-10-20 12:04',
      news_time: '2023-10-20 12:04',
      coverImg: './newsImg/11/cover.jpg'
    },
    {
      id: 10,
      title: '统计费时费力还易出错？企业高效率管车的秘密在这里',
      create_time: '2023-10-12 18:01',
      publish_time: '2023-10-12 18:01',
      news_time: '2023-10-12 18:01',
      coverImg: './newsImg/10/cover.png'
    },
    {
      id: 1,
      title: '公务用车新规出台，Mr.Car助力管理效率合规双提升',
      create_time: '2023-09-21 18:00',
      publish_time: '2023-09-21 18:00',
      news_time: '2023-09-21 18:00',
      coverImg: './newsImg/1/cover.png'
    },
    {
      id: 3,
      title: '司机执行率提升95% |Mr.Car精准破解管理瓶颈',
      create_time: '2023-09-14 18:00',
      publish_time: '2023-09-14 18:00',
      news_time: '2023-09-14 18:00',
      coverImg: './newsImg/3/cover.png'
    },
    {
      id: 4,
      title: '公务用车出行降本增效新模式 ，这方案“稳、省、好”！',
      create_time: '2023-09-08 18:00',
      publish_time: '2023-09-08 18:00',
      news_time: '2023-09-08 18:00',
      coverImg: './newsImg/4/cover.jpg'
    },
    {
      id: 7,
      title: '功能详解|耗时又繁琐的车务管理，以后就都交给TA',
      create_time: '2023-08-17 18:01',
      publish_time: '2023-08-17 18:01',
      news_time: '2023-08-17 18:01',
      coverImg: './newsImg/7/cover.png'
    },
    {
      id: 6,
      title: '功能详解|Mr.Car报警管理，守护安全线',
      create_time: '2023-08-10 18:00 ',
      publish_time: '2023-08-10 18:00 ',
      news_time: '2023-08-10 18:00 ',
      coverImg: './newsImg/6/cover.png'
    },
    {
      id: 2,
      title:
        '实力认证|Mr.Car入选中国信通院《高质量数字化转型产品及服务全景图》',
      create_time: '2023-08-03 18:00',
      publish_time: '2023-08-03 18:00',
      news_time: '2023-08-03 18:00',
      coverImg: './newsImg/2/cover.jpeg'
    },
    {
      id: 5,
      title: '解决方案|Mr.Car以数字化赋能公务用车精准管理',
      create_time: '2023-07-25 08:01',
      publish_time: '2023-07-25 08:01',
      news_time: '2023-07-25 08:01',
      coverImg: './newsImg/5/cover.png'
    },
    {
      id: 8,
      title: '功能详解|一键远程控制，让管车更省心',
      create_time: '2023-07-25 08:01',
      publish_time: '2023-07-25 08:01',
      news_time: '2023-07-25 08:01',
      coverImg: './newsImg/8/cover.png'
    },
    {
      id: 9,
      title: '一图了解Mr.Car数字化用车服务平台',
      create_time: '2023-07-13 18:00',
      publish_time: '2023-07-13 18:00',
      news_time: '2023-07-13 18:00',
      coverImg: './newsImg/9/cover.png'
    }
  ];
  var totalNum = newsList.length; //总条数

  var page = getUrlParams('page') || 1;
  initNews(page);
  $('.pagination-box').pagination({
    current: page,
    totalData: totalNum,
    showData: 9,
    coping: true,
    homePage: '<<',
    endPage: '>>',
    prevContent: '<img src="../images/icon/next-page.svg">',
    nextContent: '<img src="../images/icon/next-page.svg">',
    isHide: true,
    count: 5,
    callback: function (api) {
      var currentPage = api.getCurrent();
      scrollToTop();
      window.location.href = './newsList.html?page=' + currentPage;
    }
  });

  function initNews (page) {
    var showNews = newsList.slice(9 * page - 9, 9 * page);
    var str = '';
    for (var i = 0; i < showNews.length; i++) {
      str += `<div class="news-item">
								<a href="./newsDetail.html?id=${showNews[i].id}">
										<div class="img-box" style="background-image: url(${showNews[i].coverImg})">
											<img class="display-none" data-src="${showNews[i].coverImg}" alt="" />
										</div>
										<div class="news-date">${showNews[i].news_time}</div>
										<div class="title">
										${showNews[i].title}
										</div>
										<div class="btn">
												<span>阅读全文</span>
												<img src="./images/icon/right-arrow.svg" alt="" />
										</div>
								</a>
						</div>`;
    }
    $('.list-wrapper .content-wrapper .list-box').empty().append(str);
  }

  function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }

  function lazyLoadImages () {
    const imgboxes = document.querySelectorAll(
      '.list-wrapper .content-wrapper .news-item .img-box'
    );
    const windowHeight = window.innerHeight;

    imgboxes.forEach((imgbox) => {
      const rect = imgbox.getBoundingClientRect();
      if (
        (rect.top >= 0 && rect.top <= windowHeight) ||
        (rect.top < windowHeight + 100 && rect.bottom >= 0)
      ) {
        const img = imgbox.querySelector('img[data-src]');
        if (img) {
          const dataSrc = img.getAttribute('data-src');
          imgbox.style.backgroundImage =
            'url("../images/icon/default-cover.svg")'; // 使用占位符
          const newImg = new Image();
          newImg.src = dataSrc;
          newImg.onload = function () {
            imgbox.style.backgroundImage = `url(${dataSrc})`; // 图片加载完成后替换为实际背景图
            img.setAttribute('src', dataSrc);
            img.onload = function () {
              img.removeAttribute('data-src');
            };
          };
        }
      }
    });
  }

  window.addEventListener('scroll', lazyLoadImages);
  window.addEventListener('resize', lazyLoadImages);

  lazyLoadImages();

  function getUrlParams (name) {
    var search = document.location.search;
    var pattern = new RegExp('[?&]' + name + '=([^&]+)', 'g');
    var matcher = pattern.exec(search);
    var items = null;
    if (null != matcher) {
      try {
        items = decodeURIComponent(decodeURIComponent(matcher[1]));
      } catch (e) {
        try {
          items = decodeURIComponent(matcher[1]);
        } catch (e) {
          items = matcher[1];
        }
      }
    }
    return items;
  }
});


