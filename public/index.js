
// async function loadHeader(jsonObj) {

// }

function createUnderline() {
    let underline = document.createElement('div');
    underline.className = "underline"
    return underline;
}

function loadFooter(jsonObj) {
    let footer = document.querySelector("footer");
    let div = document.createElement("div");
    div.className = jsonObj["class"]
    console.log(div.className)
    footer.append(div);

    let div1 = document.createElement("div");
    div.append(div1);

    let logoDiv = document.createElement("div");
    logoDiv.className = jsonObj["div1"]["logo"]["class"]
    logoDiv.setAttribute("style", "font-weight: bold;color:aliceblue;")
    div1.append(logoDiv);

    let h3 = document.createElement("h3");
    h3.textContent = jsonObj["div1"]["logo"]["h3"];
    div1.append(h3);

    div1.append(createUnderline());

    let list = document.createElement("ul");
    list.className = "footer-list";
    div1.append(list);
    for (let item of jsonObj["div1"]["items"]) {
        let li = document.createElement('li');
        li.className = "footer-item";
        list.append(li);

        let a = document.createElement('a');
        a.href = item['a']['href']
        a.textContent = item['a']['text']
        li.append(a);
        li.append(createUnderline());
    }

    let icons = document.createElement("div");
    icons.className = "social-icons";
    div.append(icons);
    for(let icon of jsonObj["div1"]["social-icons"]){
        let iconn =document.createElement("div");
        iconn.className = "social-icon";
        icons.append(iconn);

        let img = document.createElement('img');
        img.src = icon['src']
        img.alt = icon['alt']
        iconn.append(img);
        iconn.append(createUnderline());``
    }
}

async function loadPage() {
    let req = new Request("index.json")
    let res = await fetch(req);

    let jsonObject = await res.json();

    loadHeader(jsonObject["header"]);
    loadFooter(jsonObject["footer"]);
}

function loadHeader(jsonObj) {
    let header = document.querySelector("header");
    let nav = document.createElement("nav");
    header.append(nav);

    let logoDiv = document.createElement("div");
    logoDiv.className = jsonObj["nav"]["logo"]["class"]
    logoDiv.setAttribute("style","font-weight: bold;color:aliceblue; margin-left: 50px;")
    nav.append(logoDiv);

    let h2 = document.createElement('h2');
    h2.textContent = jsonObj["nav"]["logo"]["h2"]
    logoDiv.append(h2);
    logoDiv.append(createUnderline());

    let list = document.createElement("ul");
    list.className = "nav-list";
    nav.append(list);
    for(let item of jsonObj["nav"]["items"]){
        let li = document.createElement('li');
        li.className = "nav-item";
        list.append(li);

        let a = document.createElement('a');
        a.href = item['a']["href"]
        a.textContent = item['a']["text"]
        li.append(a);
        li.append(createUnderline());

    }

    let div1 = document.createElement("div");
    div1.className = jsonObj["div1"]["class"];
    div1.textContent = jsonObj["div1"]["text"]
    div1.setAttribute("style", "margin-left:1%; margin-top: 10%;");
    header.append(div1);

    let div2 = document.createElement("div")
    div2.setAttribute("style", "padding-top: 3%;padding-bottom: 5%;");
    let h22 = document.createElement('h2');
    h22.textContent = jsonObj["div2"]["h2"]
    h22.setAttribute("style", "color: white; font-weight:lighter;")
    div2.append(h22)
    header.append(div2);



    







}

loadPage()
