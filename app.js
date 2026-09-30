const CONFIG = { taslak: true };
const PHOTO = "zeynep-sarikaya.jpg";
document.querySelectorAll("img[data-me]").forEach(i => i.src = PHOTO);
const CATS = {
  genel:{ad:"Tanışma",cls:"cat-genel",ic:"i-hi"},
  veliler:{ad:"Veliler",cls:"cat-veliler",ic:"i-veli"},
  ogrenciler:{ad:"Öğrenciler",cls:"cat-ogrenciler",ic:"i-ogr"},
  ogretmenler:{ad:"Öğretmenler",cls:"cat-ogretmenler",ic:"i-ogt"}
};
const AREAS = [
  ["i-pulse","Sınav kaygısı ve sınava hazırlık","Kaygıyı tanımak, sınav dönemini daha dengeli geçirmek."],
  ["i-sprout","Ergenlik dönemi","Değişen duygular, kimlik arayışı ve aileyle ilişkiler."],
  ["i-home","Aile ve çocuk iletişimi","Dinlemek, sınır koymak ve birbirini anlamak."],
  ["i-clock","Verimli çalışma ve zaman yönetimi","Plan yapmak, ertelemeyle baş etmek."],
  ["i-people","Akran ilişkileri ve zorbalığı önleme","Arkadaşlık becerileri, güvenli okul ortamı."],
  ["i-compass","Eğitsel ve mesleki rehberlik","İlgi ve yetenekleri tanıyarak gelecek için seçim yapmak."]
];
const POSTS = [
  {slug:"merhaba", k:"genel", tarih:"2026-09-29", taslakMetin:true,
   baslik:"Merhaba: Bu sayfayı neden açtım?",
   ozet:"Kim olduğumu, bu sayfayı neden açtığımı ve burada neler bulacağınızı kısaca anlatmak istedim.",
   govde:`<p>Merhaba, ben Zeynep Sarıkaya. 2014'ten bu yana Millî Eğitim Bakanlığı'nda psikolojik danışman olarak çalışıyorum. Bu yıllarda ilkokulda, ortaokulda ve Rehberlik ve Araştırma Merkezi'nde görev yaptım; farklı yaşlardaki çocuklarla, aileleriyle ve öğretmenleriyle birlikte çalıştım.</p>
   <h2>Neden bu sayfa?</h2><p>Farklı kademelerde çalışmak, benzer soruların farklı yaşlarda farklı biçimlerde karşımıza çıktığını görmemi sağladı. Bir veli çocuğunun sınav kaygısını, bir öğrenci ders çalışmaya nereden başlayacağını, bir öğretmen sınıfındaki bir öğrenciye nasıl yaklaşacağını merak ediyor. Bu soruların pek çoğunun cevabı, güvenilir ve sade bir bilgiyle başlıyor. Bu sayfayı, o bilgiyi paylaşabileceğim sakin bir yer olsun diye açtım.</p>
   <h2>Burada neler bulacaksınız?</h2><p>Yazıları üç başlıkta topluyorum:</p>
   <ul><li><strong>Veliler için:</strong> çocukla iletişim, ergenlik, okul ve sınav dönemlerinde destek olmak.</li><li><strong>Öğrenciler için:</strong> çalışma düzeni, zaman yönetimi, kaygıyla baş etmek ve arkadaşlık ilişkileri.</li><li><strong>Öğretmenler için:</strong> sınıfta zorlanan öğrenciyi fark etmek ve doğru yönlendirmek.</li></ul>
   <p>Zamanla indirilebilir rehberler ve kaynaklar da ekleyeceğim.</p>
   <h2>Bu sayfa ne değildir?</h2><p>Buradaki yazılar bilgilendirme amaçlıdır ve bireysel psikolojik danışmanlığın yerini tutmaz. Öğrenciler için ilk başvuru noktası her zaman kendi okullarındaki rehberlik servisidir. Acil bir durumda 112'yi arayabilirsiniz.</p>
   <h2>Sizden duymak isterim</h2><p>Hangi konuları okumak istediğinizi bana <a href="#/iletisim">iletişim sayfasından</a> yazabilirsiniz. Bir sonraki yazı belki sizin sorunuzdan doğar.</p>
   <p>Sevgiyle,<br>Zeynep</p>`},
  {slug:"sinav-doneminde-destek", k:"veliler", ornek:true, tarih:"2026-09-28",
   baslik:"Sınav döneminde çocuğunuza nasıl destek olabilirsiniz?",
   ozet:"Sınav yaklaşırken evde kurulan küçük düzenler, çocuğun kendini daha güvende hissetmesine yardımcı olabilir.",
   govde:`<p>Sınav dönemi yalnızca öğrenci için değil, bütün aile için yoğun bir süreçtir. Bu dönemde çocuğun en çok ihtiyaç duyduğu şey, çoğu zaman ek bir ders değil, sakin ve öngörülebilir bir ev ortamıdır.</p>
   <h2>Düzeni koruyun</h2><p>Uyku, yemek ve dinlenme saatlerinin mümkün olduğunca sabit kalması, kaygıyı artıran belirsizliği azaltır.</p>
   <h2>Karşılaştırmadan kaçının</h2><p>Kardeşler, kuzenler ya da arkadaşlarla yapılan kıyaslamalar, niyet iyi olsa da çoğu zaman baskı olarak algılanır.</p>
   <h2>Önce dinleyin</h2><p>Çocuğunuz kaygısını anlattığında hemen çözüm sunmak yerine, önce duygusunu adlandırmasına alan açın. "Bu sınav seni epey düşündürüyor gibi" demek, uzun bir nasihatten daha çok işe yarayabilir.</p>
   <h2>Ne zaman destek istemeli?</h2><p>Kaygı uykuyu, iştahı ya da okula gitmeyi belirgin biçimde etkilemeye başladıysa, okulun rehberlik servisiyle görüşmek iyi bir ilk adımdır.</p>`},
  {slug:"zamani-planlamak", k:"ogrenciler", ornek:true, tarih:"2026-09-21",
   baslik:"Ders çalışırken zamanı planlamanın küçük adımları",
   ozet:"Büyük bir plan yerine küçük ve gerçekçi adımlarla başlamak, çalışmaya devam etmeyi kolaylaştırır.",
   govde:`<p>Çoğu öğrenci plan yapmayı dener ama birkaç gün sonra bırakır. Bunun nedeni genellikle planın fazla iddialı olmasıdır.</p>
   <h2>Günü üçe bölün</h2><p>Her gün için yalnızca üç iş belirleyin. Hepsi bittiğinde gün tamamlanmış sayılır.</p>
   <h2>Kısa bloklarla çalışın</h2><p>Kısa bir çalışma süresi ve ardından kısa bir mola, dikkati korumaya yardımcı olur. Süreleri kendinize göre ayarlayın.</p>
   <h2>Planı haftalık gözden geçirin</h2><p>Hafta sonunda neyin işe yaradığına bakın ve bir sonraki haftayı ona göre düzenleyin. Planı değiştirmek başarısızlık değil, öğrenmektir.</p>`},
  {slug:"zorlanan-ogrenciyi-fark-etmek", k:"ogretmenler", ornek:true, tarih:"2026-09-14",
   baslik:"Sınıfta zorlanan öğrenciyi fark etmek",
   ozet:"Öğretmenler, öğrencideki değişimi ilk fark eden kişiler arasındadır. Neye dikkat edilebilir, nasıl yönlendirilebilir?",
   govde:`<p>Öğretmen, öğrenciyi her gün gören ve değişimi erken fark edebilecek kişilerden biridir. Tek başına bir işaret bir şey anlatmayabilir; önemli olan öğrencinin kendi olağan hâlinden belirgin bir değişimdir.</p>
   <h2>Dikkat edilebilecek değişimler</h2><ul><li>Derse katılımda ya da notlarda ani düşüş</li><li>Arkadaşlarından uzaklaşma, içe kapanma</li><li>Sık devamsızlık ya da derse geç kalma</li><li>Alışılmadık öfke ya da huzursuzluk</li></ul>
   <h2>Nasıl yaklaşılabilir?</h2><p>Öğrenciyle kısa ve baskısız bir konuşma, fark edildiğini hissettirmek için yeterli olabilir. Tanı koymaya ya da sorunu tek başına çözmeye çalışmak yerine, gözlemlerinizi okulun rehberlik servisiyle paylaşmanız en doğru adımdır.</p>`}
];
const $ = s => document.querySelector(s);
const fmt = d => new Date(d+"T12:00:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"});
const icon = id => `<svg class="icon"><use href="#${id}"/></svg>`;
const pat = `<svg class="pat" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="330" cy="60" r="90" fill="#fff" opacity=".25"/><circle cx="60" cy="260" r="70" fill="#fff" opacity=".18"/><path d="M0 230 C 90 190, 160 250, 240 210 S 360 160, 400 190" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.5"/></svg>`;
const card = p => { const c = CATS[p.k]; return `<a class="card ${c.cls}" href="#/yazi/${p.slug}"><div class="cover">${pat}${icon(c.ic)}</div><div class="meta">${c.ad} · ${fmt(p.tarih)}</div><h3>${p.baslik}</h3><p>${p.ozet}</p><span class="more">Devamını okuyun</span></a>`; };
const areas = () => AREAS.map(a => `<div class="area">${icon(a[0])}<h3>${a[1]}</h3><p>${a[2]}</p></div>`).join("");
function renderBlog(k){
  const list = POSTS.filter(p => !k || p.k === k);
  $("#blogPosts").innerHTML = list.length ? list.map(card).join("") : `<p class="empty">Bu başlıkta henüz yazı yok. Diğer başlıklara göz atabilirsiniz.</p>`;
  document.querySelectorAll(".filters button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === (k||""))));
}
function renderPost(slug){
  const p = POSTS.find(x => x.slug === slug), el = $("#postView");
  if(!p){ el.innerHTML = `<div class="page-head"><div class="wrap"><h1>Yazı bulunamadı</h1><p class="lead">Tüm yazıları <a href="#/blog">blog sayfasında</a> bulabilirsiniz.</p></div></div>`; return; }
  const c = CATS[p.k];
  el.innerHTML = `<div class="post-head ${c.cls}"><div class="wrap"><div class="crumb"><a href="#/">Ana sayfa</a> / <a href="#/blog">Blog</a> / ${c.ad}</div><h1>${p.baslik}</h1><p class="lead">${fmt(p.tarih)}</p></div></div>
    <article class="post">
      ${CONFIG.taslak && p.ornek ? `<p class="sample">Örnek içerik: bu yazı tasarımı göstermek için eklendi, Zeynep Hanım'ın kendi yazısıyla değiştirilecek.</p>` : ""}
      ${CONFIG.taslak && p.taslakMetin ? `<p class="sample">Taslak metin: Zeynep Hanım okuyup kendi sesine göre düzenleyecek.</p>` : ""}
      <div class="body">${p.govde}</div>
      <div class="author"><img src="${PHOTO}" alt=""><div><b>Zeynep Sarıkaya</b><span>Psikolojik Danışman, Millî Eğitim Bakanlığı</span></div></div>
    </article>`;
}
function route(){
  const h = location.hash.replace(/^#\/?/,"");
  const [path, q] = h.split("?");
  const parts = path.split("/");
  let view = parts[0] || "home";
  if(!document.querySelector(`[data-view="${view}"]`)) view = "home";
  if(view === "blog"){ const k = new URLSearchParams(q||"").get("k"); renderBlog(CATS[k] && k !== "genel" ? k : ""); }
  if(view === "yazi") renderPost(parts[1]);
  document.querySelectorAll(".view").forEach(s => s.classList.toggle("active", s.dataset.view === view));
  const navKey = view === "yazi" ? "blog" : view;
  document.querySelectorAll("[data-nav]").forEach(a => a.dataset.nav === navKey ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current"));
  $("#mainNav").classList.remove("open"); $(".menu-btn").setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
}
$("#homePosts").innerHTML = POSTS.slice(0,3).map(card).join("");
$("#homeAreas").innerHTML = areas();
$("#pageAreas").innerHTML = areas();
document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => { location.hash = b.dataset.k ? `#/blog?k=${b.dataset.k}` : "#/blog"; }));
$(".menu-btn").addEventListener("click", e => { const o = $("#mainNav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", String(o)); });
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.currentTarget, st = f.querySelector(".status");
  if(!f.ad.value.trim() || !f.eposta.value.includes("@") || !f.mesaj.value.trim()){ st.textContent = "Lütfen adınızı, geçerli bir e-posta adresini ve mesajınızı yazın."; return; }
  if(!f.kvkk.checked){ st.textContent = "Göndermek için kişisel veri onay kutusunu işaretleyin."; return; }
  st.textContent = "Taslak sürüm: form henüz bir e-posta adresine bağlanmadı, mesaj gönderilmedi.";
});
$("#themeToggle").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});
if(!CONFIG.taslak) $("#draftBanner").remove();
addEventListener("hashchange", route);
route();
