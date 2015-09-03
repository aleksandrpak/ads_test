dropCollections();
addApps();
addAds();

function dropCollections() {
  print("dropping collections");

  db.apps.drop();
  db.ads.drop();
  db.views.drop();
  db.clicks.drop();
  db.conversions.drop();

  print("collections dropped");
}

function addApps() {
  print("adding apps");

  db.apps.insert({
    appToken: "a"
  });
  db.apps.insert({
    appToken: "b"
  });
  db.apps.insert({
    appToken: "c"
  });
  db.apps.insert({
    appToken: "d"
  });
  db.apps.insert({
    appToken: "e"
  });

  print("added apps with tokens: 'a', 'b', 'c', 'd', 'e'");
}

function addAds() {
  print("adding 1000 ads");

  for (var i = 0; i < 1000; ++i) {
    addAd(i);
  }

  print("added ads");
}

function addAd(index) {
  var ad = {
    viewsCount: 0,
    isActive: true,
    isCampaignActive: true,
    conversionUrl: "http://localhost:4000/offer/" + index + "/",
    feedBannerUrl: "http://localhost:4000/feedBanner/" + index,
    feedDescription: "feed description " + index,
    fullscreenBannerUrl: "http://localhost:4000/fullscreenBanner/" + index,
    fullscreenDescription: "fullscreen description " + index,
    target: {},
  };

  if (index % 5 == 0) {
    ad.target.gender = "female";
  } else if (index % 3 == 0) {
    ad.target.gender = "male";
  } else if (index % 15 == 0) {
    ad.target.ageLow = 18;
  } else if (index % 45 == 0) {
    ad.target.ageHigh = 40;
  } else if (index % 30 == 0) {
    ad.target.geo = "RU";
  }

  db.ads.insert(ad);
}
