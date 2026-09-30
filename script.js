const d = {
    1: {
        t: "برنامج: التعزيز التحفيزي",
        b: "يهدف إلى بناء وزيادة الدافعية الداخلية لدى المريض لبدء عملية التعافي والاستمرار فيها."
    },
    2: {
        t: "برنامج: العلاج النفسي والسلوكي",
        b: "يركز على تحديد وتغيير أنماط التفكير والسلوكيات التي أدت إلى اضرار، وتعليم مهارات التأقلم للتعامل مع المواقف والضغوط."
    },
    3: {
        t: "برنامج: العلاج النفسي الديناميكي",
        b: "يركز على فهم وتحليل التجارب الماضية والصراعات غير المحلولة التي قد تكون وراء السلوكيات القهرية والرغبة فى الاشباع الفوري."
    },
    4: {
        t: "مرحلة: التأهيل والمتابعة",
        b: "يهدف إلى مساعدة المتعافي على الاندماج مجددًا في المجتمع، وتحسين العلاقات الأسرية والاجتماعية، استمرار الدعم والمتابعة بعد انتهاء فترة العلاج الأساسية لتقليل خطر الانتكاسة، وقد يشمل مجموعات الدعم الذاتي أو العيادات الخارجية."
    }
};

const bs = document.querySelectorAll(".bg"),
    mo = document.getElementById("mv"),
    cl = document.querySelector(".xc"),
    mh = document.getElementById("mt"),
    mp = document.getElementById("mb"),
    menuToggle = document.getElementById("menu-toggle"),
    mobileMenu = document.getElementById("mobileMenu"),
    closeMenu = document.getElementById("closeMenu"),
    overlay = document.getElementById("overlay");

function cs() {
    mo.classList.remove("vs");
}

bs.forEach(b => {
    b.onclick = () => {
        let p = d[b.dataset.p];
        mh.textContent = p.t;
        mp.textContent = p.b;
        mo.classList.add("vs");
    };
});

cl.onclick = cs;
mo.onclick = e => {
    if (e.target === mo) cs();
};

document.querySelectorAll(".bt").forEach(b => {
    b.onclick = () => {
        b.classList.toggle("ac");
        let n = b.nextElementSibling;
        n.style.maxHeight ? n.style.maxHeight = null : n.style.maxHeight = n.scrollHeight + "px";
    };
});

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});
