// --------------------- Remove afterimage and navigate to homepage / Add animation effects ---------------------//

// When btnword is clicked
document.getElementById("btnword").addEventListener("click", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal
  if (languageModal) {
    languageModal.style.display = "none";
  }
  // Open word.html file
  window.location.href = "word.html";
});

// When btnmain is clicked
document.getElementById("btnmain").addEventListener("click", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal
  if (languageModal) {
    languageModal.style.display = "none";
  }

  // Open index.html file
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal when the page is loaded
  if (languageModal) {
    languageModal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in"); // Apply fade-in animation after the page is loaded
});

//---------------------- Language Selection -------------------------//

// Translation data for each language
const translations = {
  // Language-specific translations...
};

// Current language
let currentLanguage = "ko";

// Get DOM elements related to the language modal
const languageModal = document.getElementById("languageModal");
const closeModalButton = document.getElementById("closeModal");
const langgeButton = document.getElementById("lang-btn");
const languageList = document.getElementById("languageList");

// Initialize the modal to hidden state when the page loads
languageModal.style.display = "none"; // Hide the modal

// Event for opening the modal
langgeButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "flex"; // Show the modal
  } else {
    console.error("Modal element not found.");
  }
});

// Event for closing the modal
closeModalButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "none"; // Hide the modal
  } else {
    console.error("Modal element not found.");
  }
});

// Event for selecting a language
languageList.addEventListener("click", (event) => {
  const selectedLang = event.target.getAttribute("data-lang");
  if (selectedLang) {
    currentLanguage = selectedLang;
    updateLanguage(); // Update the displayed language
    languageModal.style.display = "none"; // Close the modal
  }
});

// Function to update the displayed language
function updateLanguage() {
  const langData = translations[currentLanguage];

  document.getElementById("btnGuide").textContent = langData.btnguide;
  document.getElementById("btnPrep").textContent = langData.btnprep;
  document.getElementById("btnLease").textContent = langData.btnLease;
  document.getElementById("btnInsurance").textContent = langData.btnInsurance;
  document.getElementById("btnLaborLaw").textContent = langData.btnLaborLaw;
  document.getElementById("sendButton").textContent = langData.btnsend;

  // Update text in the 'log-container'
  const instructionText = document.querySelector(".instruction-text");
  const confirmBtn = document.querySelector(".input-button-container button");

  if (instructionText) {
    instructionText.textContent = langData.instructionText;
  }

  if (confirmBtn) {
    confirmBtn.textContent = langData.confirmBtnText;
  }
}

// Event for adding messages in the chat
function addMessage(text, type) {
  const messageBox = document.createElement("div");
  messageBox.classList.add("chat-message");
  if (type === "bot") {
    messageBox.classList.add("bot");
  }

  messageBox.textContent = text;

  // Add the message to the chat container
  chatContainer.appendChild(messageBox);

  // Scroll to the bottom after adding the message
  messageBox.scrollIntoView({ behavior: "smooth", block: "end" });
}

// Event listener for language selection changes
document.getElementById("languageList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    // Check if the clicked element is an <li>
    const selectedLang = event.target.getAttribute("data-lang");
    if (selectedLang) {
      currentLanguage = selectedLang; // Update the selected language
      const langData = translations[currentLanguage]; // Get data for the selected language

      // First message: Add the selected language name as a bot message
      addMessage(`${event.target.textContent}`, "bot");

      // Second message: Add a welcome message in the selected language as a bot message
      setTimeout(() => {
        const botMessageElement = addMessage(langData.welcomeMessage, "bot");
        botMessageElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); // Scroll to the start
      }, 100); // Add with a slight delay (0.3 seconds)

      // Close the language modal
      languageModal.style.display = "none";
    }
  }
});


//---------------------------5 Category Selection--------------------//
// Response data for each language
const responses = {
  Usage: {
    ko: `
LawBot 사용 방법 안내입니다.

•🌐 : 언어를 선택할 수 있습니다.

•✔️	: 이민 관련 법률에 대해 자주 문의하신 상위 4가지 주제로 입력창 상단에서 확인하실 수 있습니다.

      → 이민준비 ✔️ / 임대차 계약 🏠 / 4대 보험 ⚖️ / 노동법 💼 

•💭 : 하단 입력창에 법령에 관련하여 궁금하신 내용을 자유롭게 입력하고 Enter 키를 누르거나 전송 버튼을 클릭해 주세요.

      → “전세 계약 시 주의할 점은 무엇인가요?”

•📖 : 하단 입력창에 궁금한 용어를 자유롭게 입력하고 Enter 키를 누르거나 전송 버튼을 클릭해 주세요.

      → “근로기준법”

•🎤 : 질문을 음성으로 입력할 수 있습니다.

•🎧 : 음성으로 챗봇의 답변을 재생할 수 있습니다.

•✏️ :  원하는 대화 내용을 선택하여 저장한 후, 설정한 이름으로 해당 대화를 나중에 쉽게 찾아볼 수 있습니다. 
`,

    en: `
Here is a guide to using LawBot.

•🌐: You can select a language.

•✔️: You can check the top 4 frequently asked topics about immigration laws at the top of the input window.

→ Immigration Preparation ✔️ / Lease Agreement 🏠 / 4 Major Insurances ⚖️ / Labor Law 💼

•💭: Please freely enter any questions you have about the law in the input window below and press Enter or click the Send button.

→ “What should I be careful of when signing a lease?”

•📖: Please freely enter any terms you are curious about in the input window below and press Enter or click the Send button.

→ “Labor Standards Act”

•🎤: You can input your question by voice.

•🎧: You can play the chatbot’s answer by voice.

•✏️: After selecting and saving the desired conversation content, you can easily find the conversation later with the name you set.
`,
    hi: `
यहां लॉबॉट का उपयोग करने के निर्देश दिए गए हैं।

•🌐: आप एक भाषा का चयन कर सकते हैं।

•✔️: आप इनपुट विंडो के शीर्ष पर आव्रजन कानूनों के बारे में सबसे अधिक बार पूछे जाने वाले शीर्ष 4 विषयों की जांच कर सकते हैं।

 → आप्रवासन तैयारी ✔️ / पट्टा अनुबंध 🏠 / चार प्रमुख बीमा ⚖️ / श्रम कानून 💼

•💭: कृपया बेझिझक नीचे दिए गए इनपुट बॉक्स में कानून के बारे में अपने कोई भी प्रश्न दर्ज करें और एंटर दबाएं या सबमिट बटन पर क्लिक करें।

 → "पट्टे पर हस्ताक्षर करते समय मुझे क्या ध्यान देना चाहिए?"

•📖: कृपया नीचे इनपुट बॉक्स में वह शब्द स्वतंत्र रूप से दर्ज करें जिसके बारे में आप जानना चाहते हैं और एंटर दबाएं या सबमिट बटन पर क्लिक करें।

 → "श्रम मानक अधिनियम"

•🎤: आप आवाज से प्रश्न दर्ज कर सकते हैं।

•🎧: आप चैटबॉट के उत्तरों को आवाज से चला सकते हैं।

•✏️: वांछित वार्तालाप सामग्री को चुनने और सहेजने के बाद, आप बाद में अपने द्वारा निर्धारित नाम के साथ वार्तालाप को आसानी से ढूंढ सकते हैं।
`,
    vi: `
Dưới đây là hướng dẫn cách sử dụng LawBot.

•🌐: Bạn có thể chọn ngôn ngữ.

• ✔️: Bạn có thể kiểm tra 4 chủ đề được hỏi thường xuyên nhất về luật nhập cư ở đầu cửa sổ nhập liệu.

 → Chuẩn bị nhập cư ✔️ / Hợp đồng thuê nhà 🏠 / Bốn loại bảo hiểm chính ⚖️ / Luật lao động 💼

•💭: Vui lòng nhập bất kỳ câu hỏi nào của bạn về luật vào ô nhập ở phía dưới và nhấn Enter hoặc nhấp vào nút Gửi.

 → “Tôi nên chú ý điều gì khi ký hợp đồng thuê nhà?”

•📖: Vui lòng nhập cụm từ bạn quan tâm vào ô nhập ở phía dưới và nhấn Enter hoặc nhấp vào nút Gửi.

 → “Đạo luật tiêu chuẩn lao động”

•🎤: Bạn có thể nhập câu hỏi bằng giọng nói.

•🎧: Bạn có thể phát câu trả lời của chatbot bằng giọng nói.

•✏️: Sau khi chọn và lưu nội dung cuộc trò chuyện mong muốn, bạn có thể dễ dàng tìm lại cuộc trò chuyện sau này với tên bạn đã đặt.
`,
    ru: `
Вот инструкции по использованию LawBot.

•🌐: Вы можете выбрать язык.

•✔️: Вы можете проверить 4 наиболее часто задаваемых темы об иммиграционном законодательстве в верхней части окна ввода.

 → Подготовка к иммиграции✔️ / Договор аренды 🏠 / Четыре основные страховки ⚖️ / Трудовое право 💼

•💭: Пожалуйста, не стесняйтесь задавать любые вопросы о законе в поле ввода внизу и нажмите «Ввод» или нажмите кнопку «Отправить».

 → «На что следует обратить внимание при заключении договора аренды?»

•📖: Пожалуйста, введите интересующий вас термин в поле ввода внизу и нажмите Enter или нажмите кнопку «Отправить».

 → «Закон о трудовых стандартах»

•🎤: Вы можете вводить вопросы голосом.

•🎧: ответы чат-бота можно воспроизводить голосом.

•✏️: выбрав и сохранив желаемое содержимое беседы, вы сможете легко найти беседу позже по установленному вами имени.
`,
    zh: `
以下是有关如何使用 LawBot 的说明。

•🌐：您可以选择一种语言。

•✔️：您可以在输入窗口顶部查看关于移民法最常见的 4 个主题。

 → 移民准备✔️/租赁合同🏠/四大保险⚖️/劳动法💼

•💭：请随时在底部输入框中输入您对法律的任何疑问，然后按回车键或点击提交按钮。

 →“签订租约时需要注意什么？”

•📖：请在底部输入框中自由输入您感兴趣的术语并按回车键或点击提交按钮。

 → 《劳动基准法》

•🎤：您可以通过语音输入问题。

•🎧：您可以通过语音播放聊天机器人的答案。

•✏️：选择并保存所需的对话内容后，您以后可以轻松找到您设置的名称的对话。
`,
    ja: `
LawBotの使い方ガイドです。

•🌐：言語を選択できます。

•✔️：移民関連の法律についてよく寄せられる上位4つのトピックで、入力ウィンドウの上部で確認できます。

 →移民準備✔️/賃貸借契約🏠/4大保険⚖️/労働法💼

•💭：下の入力ウィンドウに法令に関して気になった内容を自由に入力してEnterキーを押すか、転送ボタンをクリックしてください。

 →「チャーター契約時の注意点は何ですか？」

•📖：下の入力ウィンドウに気になる用語を自由に入力してEnterキーを押すか、転送ボタンをクリックしてください。

 →「労働基準法」

•🎤：質問を音声で入力できます。

•🎧：音声でチャットボットの回答を再生できます。

•✏️：希望の会話内容を選択して保存した後、設定した名前でその会話を後で簡単に閲覧できます。
`,
    tl: `
Narito ang mga tagubilin kung paano gamitin ang LawBot.

•🌐: Maaari kang pumili ng wika.

•✔️: Maaari mong tingnan ang nangungunang 4 na paksa na pinakamadalas itanong tungkol sa mga batas sa imigrasyon sa itaas ng input window.

 → Paghahanda sa imigrasyon ✔️ / Kontrata sa pag-upa 🏠 / Apat na pangunahing insurance ⚖️ / Batas sa paggawa 💼

•💭: Mangyaring huwag mag-atubiling maglagay ng anumang mga tanong na mayroon ka tungkol sa batas sa kahon ng input sa ibaba at pindutin ang Enter o i-click ang button na Isumite.

 → "Ano ang dapat kong bigyang pansin kapag pumirma ng isang lease?"

•📖: Mangyaring malayang ilagay ang terminong gusto mong malaman sa kahon ng pag-input sa ibaba at pindutin ang Enter o i-click ang button na Isumite.

 → “Labor Standards Act”

•🎤: Maaari kang maglagay ng mga tanong sa pamamagitan ng boses.

•🎧: Maaari mong i-play ang mga sagot ng chatbot sa pamamagitan ng boses.

•✏️: Pagkatapos piliin at i-save ang gustong nilalaman ng pag-uusap, madali mong mahahanap ang pag-uusap sa ibang pagkakataon gamit ang pangalang itinakda mo.
`,
    th: `
คำแนะนำในการใช้ LawBot มีดังนี้

•🌐: คุณสามารถเลือกภาษาได้

•✔️: คุณสามารถตรวจสอบหัวข้อ 4 อันดับแรกที่ถูกถามบ่อยที่สุดเกี่ยวกับกฎหมายคนเข้าเมืองได้ที่ด้านบนของหน้าต่างป้อนข้อมูล

 → การเตรียมตัวเข้าเมือง ✔️ / สัญญาเช่า 🏠 / ประกันหลักสี่ ⚖️ / กฎหมายแรงงาน 💼

•💭: โปรดป้อนคำถามที่คุณมีเกี่ยวกับกฎหมายในช่องป้อนข้อมูลด้านล่างแล้วกด Enter หรือคลิกปุ่มส่ง

 → “ฉันควรใส่ใจอะไรบ้างเมื่อเซ็นสัญญาเช่า”

•📖: โปรดป้อนคำที่คุณสนใจในช่องป้อนข้อมูลด้านล่างตามใจชอบ แล้วกด Enter หรือคลิกปุ่มส่ง

 → “พระราชบัญญัติมาตรฐานแรงงาน”

•🎶: คุณสามารถป้อนคำถามด้วยเสียง

•🎶: คุณสามารถเล่นคำตอบของแชทบอทด้วยเสียงได้

•✏️: หลังจากเลือกและบันทึกเนื้อหาการสนทนาที่ต้องการแล้ว คุณสามารถค้นหาการสนทนาในภายหลังด้วยชื่อที่คุณตั้งไว้ได้อย่างง่ายดาย
`,
    uz: `
Bu erda LawBot-dan qanday foydalanish bo'yicha ko'rsatmalar mavjud.

•🌐: Siz tilni tanlashingiz mumkin.

•✔️: Kirish oynasining yuqori qismida immigratsiya qonunlari haqida eng koʻp soʻraladigan 4 ta asosiy mavzuni tekshirishingiz mumkin.

 → Immigratsiyaga tayyorgarlik ✔️ / Lizing shartnomasi 🏠 / To'rtta asosiy sug'urta ⚖️ / Mehnat huquqi 💼

•💭: Qonun boʻyicha oʻzingizni qiziqtirgan savollaringizni pastdagi kiritish maydoniga yozib qoldiring va Enter tugmasini bosing yoki “Yuborish” tugmasini bosing.

 → "Ijara shartnomasini imzolashda nimalarga e'tibor berishim kerak?"

•📖: Iltimos, pastki qismidagi kiritish maydoniga qiziqqan atamani erkin kiriting va Enter tugmasini bosing yoki Yuborish tugmasini bosing.

 → "Mehnat standartlari to'g'risidagi qonun"

•🎤: Savollarni ovozli kiritishingiz mumkin.

•🎧: Siz chatbot javoblarini ovoz bilan o'ynashingiz mumkin.

•✏️: Kerakli suhbat mazmunini tanlab, saqlaganingizdan so‘ng, suhbatni keyinroq o‘zingiz belgilagan nom bilan osongina topishingiz mumkin.
`,
  },

  "Immigration Preparation": {
    ko: `
이민 준비를 위한 필수 사항 ⭐️

  ⭐️ 비자 준비                                                                                                                              

      • 취업 비자(E 계열): E-2(영어강사), E-7(전문직) 등                            • 유학 비자(D 계열): D-2(대학·대학원 과정), D-4(어학연수)    

      • 결혼 이민 비자(F-6): 한국인 배우자와 결혼한 경우                           • 사업 비자(D-8): 투자 및 사업을 위한 비자

      → 발급 절차: 초청장, 재정증빙, 학력·경력 증빙서류 준비 후 한국 대사관·영사관에서 신청 (체류 목적에 따라 제출 서류 상이)

  ⭐️ 한국어 능력
      
      • 한국어 능력 향상이 취업, 학업, 생활 적응에 유리
      
      • TOPIK(Test of Proficiency in Korean) 성적이 요구되는 경우 있음(D-2, E-7 등)

  ⭐️ 거주지 확보

      • 계약 형태: 월세, 전세, 단기 렌트 등 다양

      • 부동산 거래 특이사항: 전세금, 보증금 제도 등 한국 부동산 법 이해 필요

  ⭐️ 건강보험 가입

      • 한국 도착 후 국민건강보험(National Health Insurance) 가입 필요

      → 체류 자격에 따라 자동 가입 또는 별도 신청

  ⭐️ 기타 서류 준비

      • 출생증명서, 범죄경력증명서, 학력 증명서 등 준비

      • 필요 시 한국어 번역 및 공증 절차 필수

  ------------------------------------------------------------------------------------------------------------------------

주요 이민 정책 ✈️ 

  ✈️ 체류 자격 및 외국인등록증

      • 90일 이상 체류하는 경우 외국인등록증(Alien Registration Card) 발급 필수

      • 체류 자격별로 취업, 학업, 가족 초청 등 활동 범위 결정

  ✈️ F-6 결혼 이민 비자

      • 한국인과 결혼한 외국인 대상

      • 초기 1년 유효기간, 갱신 통해 장기 체류 가능

      • 한국어 능력, 재정 안정성, 결혼 진정성 심사 실시
  
  ✈️ 영주권(F-5) 및 귀화

      • 영주권(F-5): 일정 기간 합법적 체류, 재정 능력·한국어 능력 충족 시 신청 가능

      • 귀화: 일반귀화, 간이귀화, 특별귀화로 구분. TOPIK 및 한국 역사·문화 시험 필요
  
  ✈️ 고용허가제(EPS) 및 E-9 비자

      • 비숙련 외국인 근로자를 대상으로 하는 고용허가제(EPS) 운영

      • 특정 산업(제조업, 건설업 등)에서 E-9 비자를 통해 취업 가능

      • 고용주는 정부 허가를 받아 외국인 근로자 채용 가능

  ------------------------------------------------------------------------------------------------------------------------

🇰🇷 문화적 적응

  • 예의와 존중을 중시하는 사회

  • 나이, 직급, 상황에 따른 언어(호칭) 사용법 숙지

  • 식사 예절, 사회적 규범, 문화 차이 이해 필요

------------------------------------------------------------------------------------------------------------------------

🎈 도움 받을 수 있는 기관

  • 대한민국 출입국·외국인정책본부: 비자 및 체류 관련 공식 정보 제공

  • 외국인 지원센터(각 지역): 생활 정보 제공, 한국 적응 프로그램, 법률 상담 지원
`,
    en: `
Essentials for Immigration Preparation ⭐️

⭐️ Visa Preparation

• Employment Visa (E series): E-2 (English Instructor), E-7 (Professional), etc. • Student Visa (D series): D-2 (Undergraduate/Graduate Course), D-4 (Language Training)

• Marriage Immigration Visa (F-6): If you are married to a Korean spouse • Business Visa (D-8): Visa for investment and business

→ Issuance Procedure: Prepare an invitation, proof of finances, and proof of education/work experience, then apply at a Korean embassy/consulate (documents to be submitted vary depending on the purpose of stay)

⭐️ Korean Language Proficiency

• Improving your Korean language skills is beneficial for employment, studies, and adaptation to daily life

• TOPIK (Test of Proficiency in Korean) scores may be required (D-2, E-7, etc.)

⭐️ Securing a Residence

• Contract Type: Various, including monthly rent, jeonse (long-term lease), short-term lease, etc.

• Special Real Estate Transaction Requirements: Understanding Korean real estate laws, such as jeonse (long-term lease), deposit system, etc.

⭐️ Health Insurance Enrollment

• National Health Insurance (NHI) enrollment required after arrival in Korea

→ Automatic enrollment or separate application depending on residence status

⭐️ Other documents to prepare

• Birth certificate, criminal record certificate, academic transcript, etc. to prepare

• Korean translation and notarization required if necessary

------------------------------------------------------------------------------------------------------------------------

Major Immigration Policies ✈️

✈️ Residence status and Alien Registration Card

• Alien Registration Card (Alien Registration Card) is required for stays of 90 days or more

• Scope of activities such as employment, study, and family invitation determined by residence status

✈️ F-6 Marriage Immigrant Visa

• For foreigners married to Koreans

• Initial validity period of 1 year, long-term stay possible through renewal

• Korean language proficiency, financial stability, and marriage authenticity examination conducted

✈️ Permanent residence (F-5) and naturalization

• Permanent residence (F-5): Application possible upon legal residence for a certain period of time, financial ability, and Korean language proficiency

• Naturalization: Divided into general naturalization, simplified naturalization, and special naturalization. TOPIK and Korean history and culture test required

✈️ Employment Permit System (EPS) and E-9 visa

• Employment Permit System (EPS) for unskilled foreign workers

• Employment possible in certain industries (manufacturing, construction, etc.) with E-9 visa

• Employers can hire foreign workers with government permission

------------------------------------------------------------------------------------------------------------------------

🇰🇷 Cultural Adaptation

• A society that values ​​courtesy and respect

• Be familiar with language (title) usage according to age, position, and situation

• Understand dining etiquette, social norms, and cultural differences

------------------------------------------------------------------------------------------------------------------------

🎈 Organizations where you can get help

• Korea Immigration Service: Provides official information on visas and stay

• Foreigner Support Centers (each region): Provides living information, Korea adaptation programs, and legal consultation support
`,

    hi: `
इमिग्रेशन की तैयारी के लिए ज़रूरी चीज़ें ⭐️

⭐️ वीज़ा की तैयारी

• रोज़गार वीज़ा (ई सीरीज़): ई-2 (अंग्रेजी प्रशिक्षक), ई-7 (पेशेवर), आदि। • छात्र वीज़ा (डी सीरीज़): डी-2 (स्नातक/स्नातकोत्तर पाठ्यक्रम), डी-4 (भाषा प्रशिक्षण)

• विवाह इमिग्रेशन वीज़ा (एफ-6): यदि आप कोरियाई जीवनसाथी से विवाहित हैं • व्यवसाय वीज़ा (डी-8): निवेश और व्यवसाय के लिए वीज़ा

→ जारी करने की प्रक्रिया: एक आमंत्रण, वित्त का प्रमाण और शिक्षा/कार्य अनुभव का प्रमाण तैयार करें, फिर कोरियाई दूतावास/वाणिज्य दूतावास में आवेदन करें (प्रस्तुत किए जाने वाले दस्तावेज़ ठहरने के उद्देश्य के आधार पर अलग-अलग हो सकते हैं)

⭐️ कोरियाई भाषा प्रवीणता

• अपने कोरियाई भाषा कौशल में सुधार करना रोज़गार, अध्ययन और दैनिक जीवन के अनुकूलन के लिए फायदेमंद है

• TOPIK (कोरियाई में प्रवीणता की परीक्षा) स्कोर की आवश्यकता हो सकती है (डी-2, ई-7, आदि)

⭐️ निवास सुरक्षित करना

• अनुबंध प्रकार: मासिक किराया, जेओन्से (दीर्घकालिक पट्टा), अल्पकालिक पट्टा, आदि सहित विभिन्न।

• विशेष रियल एस्टेट लेनदेन आवश्यकताएँ: कोरियाई रियल एस्टेट कानूनों को समझना, जैसे कि जेओन्से (दीर्घकालिक पट्टा), जमा प्रणाली, आदि।

⭐️ स्वास्थ्य बीमा नामांकन

• कोरिया में आगमन के बाद राष्ट्रीय स्वास्थ्य बीमा (एनएचआई) नामांकन आवश्यक है

→ निवास की स्थिति के आधार पर स्वचालित नामांकन या अलग आवेदन

⭐️ तैयार करने के लिए अन्य दस्तावेज़

• जन्म प्रमाण पत्र, आपराधिक रिकॉर्ड प्रमाण पत्र, शैक्षणिक प्रतिलेख, आदि तैयार करने के लिए

• यदि आवश्यक हो तो कोरियाई अनुवाद और नोटरीकरण आवश्यक है

---------------------------------------------------------------------------------------------------------------------------------

प्रमुख आव्रजन नीतियाँ ✈️

✈️ निवास की स्थिति और विदेशी पंजीकरण कार्ड

• विदेशी पंजीकरण कार्ड (विदेशी पंजीकरण कार्ड) ठहरने के लिए आवश्यक है 90 दिन या उससे अधिक

• रोजगार, अध्ययन और परिवार के निमंत्रण जैसी गतिविधियों का दायरा निवास की स्थिति के आधार पर निर्धारित किया जाता है

✈️ F-6 विवाह अप्रवासी वीज़ा

• कोरियाई लोगों से विवाहित विदेशियों के लिए

• 1 वर्ष की प्रारंभिक वैधता अवधि, नवीनीकरण के माध्यम से दीर्घकालिक प्रवास संभव है

• कोरियाई भाषा प्रवीणता, वित्तीय स्थिरता और विवाह प्रामाणिकता परीक्षा आयोजित की गई

✈️ स्थायी निवास (F-5) और प्राकृतिककरण

• स्थायी निवास (F-5): एक निश्चित अवधि के लिए कानूनी निवास, वित्तीय क्षमता और कोरियाई भाषा प्रवीणता पर आवेदन संभव है

• प्राकृतिककरण: सामान्य प्राकृतिककरण, सरलीकृत प्राकृतिककरण और विशेष प्राकृतिककरण में विभाजित। TOPIK और कोरियाई इतिहास और संस्कृति परीक्षण आवश्यक

✈️ रोजगार परमिट प्रणाली (EPS) और E-9 वीज़ा

• अकुशल विदेशी श्रमिकों के लिए रोजगार परमिट प्रणाली (EPS)

• E-9 वीज़ा के साथ कुछ उद्योगों (विनिर्माण, निर्माण, आदि) में रोजगार संभव

• नियोक्ता सरकारी अनुमति के साथ विदेशी श्रमिकों को काम पर रख सकते हैं

------------------------------------------------------------------------------------------------------------------------

🇰🇷 सांस्कृतिक अनुकूलन

• एक ऐसा समाज जो शिष्टाचार और सम्मान को महत्व देता है

• उम्र, स्थिति और परिस्थिति के अनुसार भाषा (उपनाम) के उपयोग से परिचित होना

• भोजन शिष्टाचार, सामाजिक मानदंडों और सांस्कृतिक अंतरों को समझना

---------------------------------------------------------------------------------------------------------------------------------

🎈 संगठन जहाँ आप सहायता प्राप्त कर सकते हैं

• कोरिया इमिग्रेशन सेवा: वीज़ा और ठहरने के बारे में आधिकारिक जानकारी प्रदान करती है

• विदेशी सहायता केंद्र (प्रत्येक क्षेत्र): रहने की जानकारी, कोरिया अनुकूलन कार्यक्रम और कानूनी परामर्श सहायता प्रदान करता है
`,

    vi: `
Những điều cần thiết để chuẩn bị nhập cư ⭐️

⭐️ Chuẩn bị thị thực

• Thị thực lao động (dòng E): E-2 (Giảng viên tiếng Anh), E-7 (Chuyên gia), v.v. • Thị thực du học (dòng D): D-2 (Khóa học đại học/sau đại học), D-4 (Đào tạo ngôn ngữ)

• Thị thực nhập cư kết hôn (F-6): Nếu bạn kết hôn với vợ/chồng người Hàn Quốc • Thị thực kinh doanh (D-8): Thị thực đầu tư và kinh doanh

→ Thủ tục cấp: Chuẩn bị thư mời, bằng chứng về tài chính và bằng chứng về trình độ học vấn/kinh nghiệm làm việc, sau đó nộp đơn tại đại sứ quán/lãnh sự quán Hàn Quốc (các giấy tờ cần nộp khác nhau tùy thuộc vào mục đích lưu trú)

⭐️ Trình độ tiếng Hàn

• Cải thiện kỹ năng tiếng Hàn của bạn có lợi cho việc làm, học tập và thích nghi với cuộc sống hàng ngày

• Điểm TOPIK (Bài kiểm tra năng lực tiếng Hàn) có thể được yêu cầu (D-2, E-7, v.v.)

⭐️ Đảm bảo a Residence

• Loại hợp đồng: Nhiều loại, bao gồm tiền thuê nhà theo tháng, jeonse (cho thuê dài hạn), cho thuê ngắn hạn, v.v.

• Yêu cầu đặc biệt đối với giao dịch bất động sản: Hiểu luật bất động sản Hàn Quốc, chẳng hạn như jeonse (cho thuê dài hạn), hệ thống tiền gửi, v.v.

⭐️ Đăng ký bảo hiểm y tế

• Bắt buộc phải đăng ký Bảo hiểm y tế quốc gia (NHI) sau khi đến Hàn Quốc

→ Đăng ký tự động hoặc nộp đơn riêng tùy thuộc vào tình trạng cư trú

⭐️ Các giấy tờ khác cần chuẩn bị

• Giấy khai sinh, giấy chứng nhận lý lịch tư pháp, bảng điểm học tập, v.v. để chuẩn bị

• Bản dịch tiếng Hàn và công chứng nếu cần

------------------------------------------------------------------------------------------------------------------------------------------

Chính sách nhập cư chính ✈️

✈️ Tình trạng cư trú và Thẻ đăng ký người nước ngoài

• Thẻ đăng ký người nước ngoài (Thẻ đăng ký người nước ngoài) là bắt buộc đối với thời gian lưu trú từ 90 ngày trở lên

• Phạm vi hoạt động như việc làm, học tập và lời mời gia đình được xác định theo tình trạng cư trú

✈️ Người nhập cư kết hôn F-6 Visa

• Dành cho người nước ngoài kết hôn với người Hàn Quốc

• Thời hạn hiệu lực ban đầu là 1 năm, có thể lưu trú dài hạn thông qua gia hạn

• Trình độ tiếng Hàn, ổn định tài chính và tiến hành kiểm tra tính xác thực của hôn nhân

✈️ Thường trú (F-5) và nhập tịch

• Thường trú (F-5): Có thể nộp đơn khi cư trú hợp pháp trong một khoảng thời gian nhất định, có khả năng tài chính và trình độ tiếng Hàn

• Nhập tịch: Được chia thành nhập tịch chung, nhập tịch giản lược và nhập tịch đặc biệt. Yêu cầu phải có bài kiểm tra TOPIK và lịch sử và văn hóa Hàn Quốc

✈️ Hệ thống Giấy phép Lao động (EPS) và thị thực E-9

• Hệ thống Giấy phép Lao động (EPS) dành cho lao động nước ngoài không có tay nghề

• Có thể làm việc trong một số ngành nhất định (sản xuất, xây dựng, v.v.) với thị thực E-9

• Người sử dụng lao động có thể thuê lao động nước ngoài khi được chính phủ cho phép

------------------------------------------------------------------------------------------------------------------------------

🇰🇷 Thích nghi Văn hóa

• Một xã hội coi trọng sự lịch sự và tôn trọng

• Quen thuộc với cách sử dụng ngôn ngữ (chức danh) theo độ tuổi, chức vụ và hoàn cảnh

• Hiểu được phép xã giao trong ăn uống, chuẩn mực xã hội và sự khác biệt về văn hóa

------------------------------------------------------------------------------------------------------------------------------

🎈 Các tổ chức nơi bạn có thể nhận được sự trợ giúp

• Cục Di trú Hàn Quốc: Cung cấp thông tin chính thức về thị thực và lưu trú

• Trung tâm Hỗ trợ Người nước ngoài (mỗi khu vực): Cung cấp thông tin về cuộc sống, các chương trình thích nghi với Hàn Quốc và hỗ trợ tư vấn pháp lý
`,

    ru: `
Основы подготовки к иммиграции ⭐️

⭐️ Подготовка к визе

• Рабочая виза (серия E): E-2 (преподаватель английского языка), E-7 (профессиональная) и т. д. • Студенческая виза (серия D): D-2 (курс бакалавриата/аспирантуры), D-4 (языковая подготовка)

• Виза для иммиграции по браку (F-6): если вы состоите в браке с корейским супругом • Деловая виза (D-8): виза для инвестиций и бизнеса

→ Процедура выдачи: подготовьте приглашение, подтверждение финансов и подтверждение образования/опыта работы, затем подайте заявление в корейское посольство/консульство (документы, которые необходимо предоставить, различаются в зависимости от цели пребывания)

⭐️ Уровень владения корейским языком

• Улучшение навыков владения корейским языком полезно для трудоустройства, учебы и адаптации к повседневной жизни

• Могут потребоваться баллы TOPIK (тест на знание корейского языка) (D-2, E-7 и т. д.)

⭐️ Обеспечение места жительства

• Тип договора: Различные, включая ежемесячную аренду, jeonse (долгосрочная аренда), краткосрочную аренду и т. д.

• Особые требования к сделкам с недвижимостью: Понимание корейских законов о недвижимости, таких как jeonse (долгосрочная аренда), система депозитов и т. д.

⭐️ Регистрация в медицинском страховании

• Регистрация в Национальном медицинском страховании (NHI) требуется после прибытия в Корею

→ Автоматическая регистрация или отдельное заявление в зависимости от статуса проживания

⭐️ Другие документы для подготовки

• Свидетельство о рождении, справка о судимости, академическая справка и т. д. для подготовки

• При необходимости требуется перевод на корейский язык и нотариальное заверение

--------------------------------------------------------------------------------------------------------

Основные иммиграционные правила ✈️

✈️ Статус проживания и карта регистрации иностранца

• Карта регистрации иностранца (карта регистрации иностранца) требуется для пребывания в течение 90 дней или more

• Сфера деятельности, такая как трудоустройство, учеба и приглашение семьи, определяется статусом проживания

✈️ Иммиграционная виза F-6 для брака

• Для иностранцев, состоящих в браке с корейцами

• Первоначальный срок действия 1 год, долгосрочное пребывание возможно путем продления

• Проводится проверка уровня владения корейским языком, финансовой стабильности и подлинности брака

✈️ Постоянное место жительства (F-5) и натурализация

• Постоянное место жительства (F-5): подача заявления возможна при наличии законного проживания в течение определенного периода времени, финансовых возможностей и владения корейским языком

• Натурализация: делится на общую натурализацию, упрощенную натурализацию и специальную натурализацию. Требуется тест TOPIK и корейской истории и культуры

✈️ Система разрешений на трудоустройство (EPS) и виза E-9

• Система разрешений на трудоустройство (EPS) для неквалифицированных иностранных рабочих

• Возможно трудоустройство в определенных отраслях (производство, строительство и т. д.) с визой E-9

• Работодатели могут нанимать иностранных рабочих с разрешения правительства

------------------------------------------------------------------------------------------------------------------------

🇰🇷 Культурная адаптация

• Общество, которое ценит вежливость и уважение

• Знать использование языка (титула) в соответствии с возрастом, должностью и ситуацией

• Понимать этикет застолья, социальные нормы и культурные различия

--------------------------------------------------------------------------------------------------------

🎈 Организации, в которых вы можете получить помощь

• Корейская иммиграционная служба: предоставляет официальную информацию о визах и пребывании

• Центры поддержки иностранцев (в каждом регионе): предоставляет информацию о проживании, Программы адаптации в Корее и юридическая консультационная поддержка
`,

    zh: `
移民准备必备材料⭐️

⭐️ 签证准备

• 就业签证（E系列）：E-2（英语讲师）、E-7（专业）等 • 留学签证（D系列）：D-2（本科/研究生课程）、D-4（语言培训）

• 结婚移民签证（F-6）：与韩国配偶结婚时 • 商务签证（D-8）：投资和商务签证

→ 签发程序：准备邀请函、资金证明、教育/工作经验证明，然后在韩国大使馆/领事馆申请（提交的文件因逗留目的而异）

⭐️ 韩语能力

• 提高韩语能力对就业、学习和适应日常生活有益

• 可能需要 TOPIK（韩语能力测试）成绩（D-2、E-7 等）

⭐️ 获得住所

• 合同类型：多种多样，包括月租、全租、短期租约等

• 特殊房地产交易要求：了解全租、押金制度等韩国房地产法律

⭐️ 健康保险登记

• 抵达韩国后需要加入国民健康保险（NHI）

→ 根据居留身份自动加入或单独申请

⭐️ 其他需要准备的文件

• 需要准备出生证明、犯罪记录证明、成绩单等

• 必要时需要韩语翻译和公证

------------------------------------------------------------------------------------------------------------------------

主要移民政策✈️

✈️ 居留身份和外国人登记卡

• 停留 90 天或以上需要外国人登记卡（外国人登记卡）

• 根据居留身份确定的就业、学习和家人邀请等活动范围

✈️ F-6 结婚移民签证

• 针对与韩国人结婚的外国人

• 初始有效期期限为1年，可通过更新获得长期居留

• 进行韩语能力、经济稳定性和婚姻真实性审查

✈️ 永久居留（F-5）和入籍

• 永久居留（F-5）：合法居留一定时间、经济能力、韩语能力即可申请

• 入籍：分为一般入籍、简易入籍和特别入籍。需要通过 TOPIK 和韩国历史文化考试

✈️ 就业许可制度 (EPS) 和 E-9 签证

• 针对非熟练外国工人的就业许可制度 (EPS)

• 持有 E-9 签证可在某些行业（制造业、建筑业等）就业

• 雇主可以在获得政府许可的情况下雇用外国工人

--------------------------------------------------------------------------------------------------------------------------------

🇰🇷 文化适应

• 重视礼貌和尊重的社会

• 熟悉根据年龄、职位和情况使用的语言（头衔）

• 了解餐饮礼仪、社会规范和文化差异

------------------------------------------------------------------------------------------------------------------------------------

🎈 可以获得帮助的机构

• 韩国移民局：提供有关签证和居留的官方信息

• 外国人支持中心（各地区）：提供生活信息、韩国适应计划和法律咨询支持
`,

    ja: `
移民準備に必要なもの ⭐️

⭐️ ビザ準備

• 就労ビザ (E シリーズ): E-2 (英語講師)、E-7 (専門職) など • 学生ビザ (D シリーズ): D-2 (学部/大学院課程)、D-4 (語学研修)

• 結婚移民ビザ (F-6): 韓国人と結婚している場合 • ビジネスビザ (D-8): 投資およびビジネスのためのビザ

→ 発行手順: 招待状、財政証明、教育/職務経験証明を用意し、韓国大使館/領事館で申請 (提出書類は滞在目的によって異なります)

⭐️ 韓国語能力

• 韓国語スキルの向上は、就職、学習、日常生活への適応に役立ちます

• TOPIK (韓国語能力試験) のスコアが必要になる場合があります (D-2、E-7 など)

⭐️ ビザの取得居住

• 契約形態: 月々の家賃、長期賃貸、短期賃貸など、多様

• 不動産取引の特別要件: 長期賃貸、保証金制度など、韓国の不動産法の理解

⭐️ 健康保険加入

• 韓国到着後、国民健康保険 (NHI) 加入が必要

→ 居住ステータスに応じて自動加入または別途申請

⭐️ 準備するその他の書類

• 出生証明書、犯罪経歴証明書、成績証明書などを用意

• 必要に応じて韓国語への翻訳と公証が必要

------------------------------------------------------------------------------------------------------------------------------

主な移民政策 ✈️

✈️ 居住ステータスと外国人登録カード

• 90日以上の滞在には外国人登録カード (外国人登録カード) が必要

• 居住ステータスによって決まる就労、学習、家族の招待などの活動範囲

✈️ F-6 結婚移民ビザ

•韓国人と結婚した外国人の場合

• 初回有効期間は1年、更新により長期滞在可能

• 韓国語能力、経済力、結婚の真正性審査を実施

✈️ 永住権（F-5）と帰化

• 永住権（F-5）：一定期間の合法居住、経済力、韓国語能力があれば申請可能

• 帰化：一般帰化、簡易帰化、特別帰化に分かれます。 TOPIKと韓国の歴史と文化のテストが必要

✈️ 就労許可制度（EPS）とE-9ビザ

• 未熟練外国人労働者のための就労許可制度（EPS）

• E-9ビザで特定の業界（製造業、建設業など）での就労が可能

• 雇用主は政府の許可を得て外国人労働者を雇用できる

----------------------------------------------------------------------------------------------------------------------------------------

🇰🇷 文化適応

• 礼儀と敬意を重んじる社会

• 年齢、立場、状況に応じた言語（敬称）の使い方に慣れる

• 食事のマナー、社会規範、文化の違いを理解する

----------------------------------------------------------------------------------------------------------------------------------------

🎈 支援を受けられる組織

• 韓国出入国管理局：ビザと滞在に関する公式情報を提供する

• 外国人支援センター（各地域）：生活情報、韓国適応プログラム、法律相談サポートを提供する
`,

    th: `
สิ่งสำคัญสำหรับการเตรียมตัวเข้าเมือง ⭐️

⭐️ การเตรียมตัวสำหรับวีซ่า

• วีซ่าทำงาน (ชุด E): E-2 (ครูสอนภาษาอังกฤษ), E-7 (มืออาชีพ) เป็นต้น • วีซ่านักเรียน (ชุด D): D-2 (หลักสูตรปริญญาตรี/บัณฑิตศึกษา), D-4 (การฝึกอบรมภาษา)

• วีซ่าแต่งงานสำหรับการย้ายถิ่นฐาน (F-6): หากคุณแต่งงานกับคู่สมรสชาวเกาหลี • วีซ่าธุรกิจ (D-8): วีซ่าสำหรับการลงทุนและธุรกิจ

→ ขั้นตอนการออกวีซ่า: เตรียมคำเชิญ หลักฐานการเงิน และหลักฐานการศึกษา/ประสบการณ์การทำงาน จากนั้นจึงยื่นคำร้องที่สถานทูต/สถานกงสุลเกาหลี (เอกสารที่ต้องยื่นจะแตกต่างกันไปขึ้นอยู่กับวัตถุประสงค์ในการพำนัก)

⭐️ ความสามารถทางภาษาเกาหลี

• การพัฒนาทักษะภาษาเกาหลีของคุณเป็นประโยชน์ต่อการทำงาน การเรียน และการปรับตัวในชีวิตประจำวัน

• อาจต้องมีคะแนน TOPIK (การทดสอบความสามารถทางภาษาเกาหลี) (D-2, E-7 เป็นต้น)

⭐️ การหาที่พักอาศัย

• ประเภทสัญญา: หลากหลาย รวมถึงรายเดือน ค่าเช่า จอนเซ (สัญญาเช่าระยะยาว) สัญญาเช่าระยะสั้น ฯลฯ

• ข้อกำหนดการทำธุรกรรมอสังหาริมทรัพย์พิเศษ: ทำความเข้าใจกฎหมายอสังหาริมทรัพย์ของเกาหลี เช่น จอนเซ (สัญญาเช่าระยะยาว) ระบบเงินฝาก ฯลฯ

⭐️ การลงทะเบียนประกันสุขภาพ

• จำเป็นต้องลงทะเบียนประกันสุขภาพแห่งชาติ (NHI) หลังจากเดินทางมาถึงเกาหลี

→ ลงทะเบียนอัตโนมัติหรือสมัครแยกต่างหาก ขึ้นอยู่กับสถานะการพำนัก

⭐️ เอกสารอื่นๆ ที่ต้องเตรียม

• สูติบัตร ใบรับรองประวัติอาชญากรรม สำเนาผลการเรียน ฯลฯ ที่ต้องเตรียม

• ต้องมีการแปลเป็นภาษาเกาหลีและการรับรองเอกสารหากจำเป็น

----------------------------------------------------------------------------------------------------------------------

นโยบายการตรวจคนเข้าเมืองหลัก ✈️

✈️ สถานะการพำนักและบัตรลงทะเบียนคนต่างด้าว

• ต้องมีบัตรลงทะเบียนคนต่างด้าว (Alien Registration Card) สำหรับการพำนัก 90 วันขึ้นไป

• ขอบเขตของกิจกรรม เช่น การจ้างงาน การศึกษา และการเชิญครอบครัว กำหนดโดยสถานะการพำนัก

✈️ วีซ่าอพยพเพื่อการสมรส F-6

• สำหรับชาวต่างชาติที่แต่งงานกับคนเกาหลี

• ระยะเวลาเริ่มต้นของอายุ 1 ปี สามารถอยู่ได้ระยะยาวผ่านการต่ออายุวีซ่า

• ผ่านการทดสอบความสามารถทางภาษาเกาหลี ความมั่นคงทางการเงิน และการรับรองความถูกต้องของการแต่งงาน

✈️ สถานะผู้พำนักถาวร (F-5) และการแปลงสัญชาติ

• สถานะผู้พำนักถาวร (F-5): สามารถยื่นคำร้องได้เมื่อพำนักถูกต้องตามกฎหมายเป็นระยะเวลาหนึ่ง ความสามารถทางการเงิน และความสามารถทางภาษาเกาหลี

• การแปลงสัญชาติ: แบ่งเป็นการแปลงสัญชาติทั่วไป การแปลงสัญชาติแบบง่าย และการแปลงสัญชาติแบบพิเศษ ต้องมีการทดสอบ TOPIK และประวัติศาสตร์และวัฒนธรรมเกาหลี

✈️ ระบบใบอนุญาตการจ้างงาน (EPS) และวีซ่า E-9

• ระบบใบอนุญาตการจ้างงาน (EPS) สำหรับแรงงานต่างด้าวไร้ทักษะ

• การจ้างงานในอุตสาหกรรมบางประเภท (การผลิต การก่อสร้าง ฯลฯ) ได้ด้วยวีซ่า E-9

• นายจ้างสามารถจ้างแรงงานต่างด้าวได้เมื่อได้รับอนุญาตจากรัฐบาล

------------------------------------------------------------------------------------------------------------------------

🇰🇷 การปรับตัวทางวัฒนธรรม

• สังคมที่ให้ความสำคัญกับความสุภาพและความเคารพ

• คุ้นเคยกับการใช้ภาษา (คำนำหน้า) ตามอายุ ตำแหน่ง และสถานการณ์

• เข้าใจมารยาทในการรับประทานอาหาร บรรทัดฐานทางสังคม และความแตกต่างทางวัฒนธรรม

------------------------------------------------------------------------------------------------------------------------

🎈 องค์กรที่คุณสามารถขอความช่วยเหลือได้

• สำนักงานตรวจคนเข้าเมืองเกาหลี: ให้ข้อมูลอย่างเป็นทางการเกี่ยวกับวีซ่าและการพำนัก

• ศูนย์ช่วยเหลือชาวต่างชาติ (แต่ละภูมิภาค): ให้ข้อมูลการใช้ชีวิต โปรแกรมการปรับตัวในเกาหลี และการสนับสนุนการให้คำปรึกษาทางกฎหมาย
`,

    tl: `
Mga Mahahalaga para sa Paghahanda sa Imigrasyon ⭐️

⭐️ Paghahanda ng Visa

• Employment Visa (E series): E-2 (English Instructor), E-7 (Propesyonal), atbp. • Student Visa (D series): D-2 (Undergraduate/Graduate Course), D-4 (Language Training)

• Marriage Immigration Visa (F-6): Kung ikaw ay kasal sa isang Koreanong asawa • Business Visa (D-8): Visa para sa pamumuhunan at negosyo

→ Pamamaraan sa Pag-isyu: Maghanda ng imbitasyon, patunay ng pananalapi, at patunay ng edukasyon/ karanasan sa trabaho, pagkatapos ay mag-apply sa isang embahada/konsulado ng Korea (mga dokumentong isusumite ay nag-iiba depende sa layunin ng pananatili)

⭐️ Kahusayan sa Wikang Korean

• Ang pagpapabuti ng iyong mga kasanayan sa wikang Korean ay kapaki-pakinabang para sa trabaho, pag-aaral, at pagbagay sa pang-araw-araw na buhay

• Maaaring kailanganin ang mga marka ng TOPIK (Test of Proficiency in Korean) (D-2, E-7, atbp.)

⭐️ Pag-secure ng Paninirahan

• Uri ng Kontrata: Iba't iba, kabilang ang buwanang upa, jeonse (pangmatagalang pag-upa), panandaliang pag-upa, atbp.

• Mga Espesyal na Kinakailangan sa Transaksyon ng Real Estate: Pag-unawa sa mga batas sa real estate sa Korea, gaya ng jeonse (pangmatagalang lease), deposit system, atbp.

⭐️ Enrollment sa Health Insurance

• Kinakailangan ang pagpapatala sa National Health Insurance (NHI) pagkarating sa Korea

→ Awtomatikong pagpapatala o hiwalay na aplikasyon depende sa status ng paninirahan

⭐️ Iba pang mga dokumentong ihahanda

• Sertipiko ng kapanganakan, sertipiko ng rekord ng kriminal, transcript ng akademiko, atbp. upang ihanda

• Kinakailangan ang pagsasalin sa Korean at pagpapanotaryo kung kinakailangan

------------------------------------------------- ------------------------------------------------- --------------------

Mga Pangunahing Patakaran sa Imigrasyon ✈️

✈️ Status ng paninirahan at Alien Registration Card

• Kinakailangan ang Alien Registration Card (Alien Registration Card) para sa mga pananatili ng 90 araw o higit pa

• Saklaw ng mga aktibidad tulad ng trabaho, pag-aaral, at imbitasyon sa pamilya na tinutukoy ng status ng paninirahan

✈️ F-6 Marriage Immigrant Visa

• Para sa mga dayuhang kasal sa mga Koreano

• Paunang panahon ng bisa ng 1 taon, posible ang pangmatagalang pananatili sa pamamagitan ng pag-renew

• Isinagawa ang kasanayan sa wikang Korean, katatagan ng pananalapi, at pagiging tunay ng kasal

✈️ Permanenteng paninirahan (F-5) at naturalisasyon

• Permanenteng paninirahan (F-5): Posible ang aplikasyon sa legal na paninirahan para sa isang partikular na tagal ng panahon, kakayahan sa pananalapi, at kasanayan sa wikang Korean

• Naturalisasyon: Nahahati sa pangkalahatang naturalisasyon, pinasimpleng naturalisasyon, at espesyal na naturalisasyon. Kinakailangan ang pagsusulit sa TOPIK at kasaysayan at kultura ng Korea

✈️ Employment Permit System (EPS) at E-9 visa

• Employment Permit System (EPS) para sa mga dayuhang manggagawang walang kasanayan

• Posible ang trabaho sa ilang partikular na industriya (manufacturing, construction, atbp.) na may E-9 visa

• Maaaring kumuha ang mga employer ng mga dayuhang manggagawa nang may pahintulot ng gobyerno

------------------------------------------------- ------------------------------------------------- --------------------

🇰🇷 Cultural Adaptation

• Isang lipunang pinahahalagahan ang kagandahang-loob at paggalang

• Maging pamilyar sa paggamit ng wika (pamagat) ayon sa edad, posisyon, at sitwasyon

• Unawain ang etiketa sa pagkain, mga pamantayan sa lipunan, at mga pagkakaiba sa kultura

------------------------------------------------- ------------------------------------------------- --------------------

🎈 Mga organisasyon kung saan ka makakakuha ng tulong

• Korea Immigration Service: Nagbibigay ng opisyal na impormasyon sa mga visa at pananatili

• Mga Foreigner Support Center (bawat rehiyon): Nagbibigay ng impormasyon sa buhay, mga programa sa pag-aangkop sa Korea, at suporta sa legal na konsultasyon
`,

    uz: `
Immigratsiyaga tayyorlanish uchun zaruriy ma'lumotlar ⭐️

⭐️ Viza tayyorlash

• Ishga joylashish vizasi (E seriyasi): E-2 (ingliz tili oʻqituvchisi), E-7 (professional) va boshqalar. • Talaba vizasi (D seriyasi): D-2 (Bakalavriat/Magistratura kursi), D-4 (Til oʻqitish)

• Nikoh immigratsiya vizasi (F-6): Agar siz koreyalik turmush o'rtog'ingiz bilan turmush qurgan bo'lsangiz • Biznes vizasi (D-8): sarmoya va biznes uchun viza

→ Berish tartibi: Taklifnoma, moliyaviy dalil va taʼlim/ish tajribasini tasdiqlovchi hujjat tayyorlang, soʻngra Koreya elchixonasi/konsulligiga murojaat qiling (topshirish kerak boʻlgan hujjatlar yashash maqsadiga qarab farqlanadi)

⭐️ Koreys tilini bilish

• Koreys tilini yaxshilash ishga joylashish, o‘qish va kundalik hayotga moslashish uchun foydalidir

• TOPIK (Koreys tilini bilish testi) ballari talab qilinishi mumkin (D-2, E-7 va boshqalar).

⭐️ Turar joyni ta'minlash

• Shartnoma turi: Har xil, jumladan oylik ijara, jeonse (uzoq muddatli ijara), qisqa muddatli ijara va boshqalar.

• Ko‘chmas mulk oldi-sotdisi bo‘yicha maxsus talablar: Koreyaning ko‘chmas mulk qonunlarini tushunish, masalan, jeonse (uzoq muddatli ijara), depozit tizimi va boshqalar.

⭐️ Sog'liqni saqlash sug'urtasi bo'yicha ro'yxatdan o'tish

• Koreyaga kelgandan keyin Milliy sog'liqni sug'urtasi (NHI) bo'yicha ro'yxatdan o'tish talab qilinadi

→ Avtomatik ro'yxatga olish yoki yashash holatiga qarab alohida ariza

⭐️ Tayyorlanishi uchun boshqa hujjatlar

• Tayyorlash uchun tug‘ilganlik haqidagi guvohnoma, sudlanganlik to‘g‘risidagi guvohnoma, akademik transkript va boshqalar

• Agar kerak bo'lsa, koreys tiliga tarjima va notarial tasdiqlash talab qilinadi

------------------------------------------------- ------------------------------------------------- --------------------

Asosiy immigratsiya siyosatlari ✈️

✈️ Yashash joyi maqomi va Chet ellik ro‘yxatga olish kartasi

• Chet elliklarni ro‘yxatga olish kartasi (Alien Registration Card) 90 kun yoki undan ko‘proq muddatda qolish uchun talab qilinadi.

• Yashash joyi maqomiga ko'ra belgilanadigan ish, o'qish va oilaviy taklif kabi faoliyat doirasi

✈️ F-6 nikoh immigratsion vizasi

• Koreyaliklarga turmushga chiqqan xorijliklar uchun

• Dastlabki amal qilish muddati 1 yil, uzaytirish orqali uzoq muddatli qolish mumkin

• Koreys tilini bilish, moliyaviy barqarorlik va nikohning haqiqiyligi imtihonlari o'tkazildi

✈️ Doimiy yashash (F-5) va fuqarolikni olish

• Doimiy yashash (F-5): Muayyan muddatga qonuniy yashash, moliyaviy imkoniyatlar va koreys tilini bilish uchun ariza berish mumkin

• Naturalizatsiya: umumiy fuqarolikka qabul qilish, soddalashtirilgan fuqarolikka qabul qilish va maxsus fuqarolikka bo‘linadi. TOPIK va Koreya tarixi va madaniyati imtihoni talab qilinadi

✈️ Ishga ruxsatnoma tizimi (EPS) va E-9 vizasi

• Malakasiz xorijiy ishchilar uchun ishga joylashish uchun ruxsatnomalar tizimi (EPS).

• E-9 vizasi bilan muayyan sohalarda (ishlab chiqarish, qurilish va h.k.) ishga joylashish mumkin.

• Ish beruvchilar hukumat ruxsati bilan chet ellik ishchilarni yollashlari mumkin

------------------------------------------------- ------------------------------------------------- --------------------

🇰🇷 Madaniy moslashuv

• Xushmuomalalik va hurmatni qadrlaydigan jamiyat

• Yoshi, mavqei va vaziyatiga ko'ra til (unvon) qo'llanilishini yaxshi biling

• Ovqatlanish odob-axloqi, ijtimoiy normalar va madaniy farqlarni tushunish

------------------------------------------------- ------------------------------------------------- --------------------

🎈 Yordam olishingiz mumkin bo'lgan tashkilotlar

• Koreya immigratsiya xizmati: vizalar va qolish bo'yicha rasmiy ma'lumotlarni taqdim etadi

• Chet elliklarni qo‘llab-quvvatlash markazlari (har bir mintaqa): jonli ma’lumotlar, Koreyaga moslashish dasturlari va huquqiy maslahat yordami bilan ta’minlaydi.
`,
  },

  "Lease Agreement": {
    ko: `
1. 전세 (보증금제도)

  • 집주인에게 일정 금액을 보증금 형태로 맡기고 1~2년 임대차 계약 후 사용하는 제도. 
  
  • 계약 시 전세금액의 10%를 계약금으로 지불하고, 입주 시 잔금을 지불합니다.

  • 입주자는 임차기간 동안 입주 당시의 주택 상태를 유지해야 합니다.
  
        ※ 내부 인테리어 공사를 하고자 할 경우 반드시 집주인의 동의를 구해야 합니다.

  • 계약 종료 후, 집주인은 입주자에게 전세금 전액을 돌려주어야 합니다. 
      
2. 월세 

  • 1~2년의 임대차 계약 후, 소정의 보증금을 지불하고 매월 사용료(월세)를 지불하는 제도.
  
  • 보증금은 보통 다달이 내는 월세의 10~20배 정도입니다. 

  • 통상적으로 보증금의 10%를 계약금으로 내며 입주 시, 잔액을 완납합니다. 

       ※ 계약자가 중도에 계약을 해지하는 경우 계약금을 돌려 받을 수 없으며, 
       
           집주인이 계약을 파기한 경우에는 계약금의 2배를 계약자에게 지급해야 합니다. 

  • 보증금은 계약 종료 후 전액 돌려받는 것이 원칙입니다.

       ※ 월세 또는 공과금이 밀리는 등특수상황이 발생할 경우, 그 금액만큼 보증금에서 제외하고 돌려받을 수 있습니다.

  • 중개수수료는 주거형태, 면적, 거래금액에 따라 차이가 있습니다. 

       → 외국어 가능 부동산 목록은 서울시가 운영하는 서울부동산정보광장(http://land.seoul.go.kr)에서 확인할 수 있습니다.
`,
    en: `
1. Jeonse (Deposit System)

• A system where a certain amount of money is deposited to the landlord and used after a 1~2 year lease contract.

• 10% of the jeonse amount is paid as a deposit when signing the contract, and the balance is paid upon moving in.

• The tenant must maintain the condition of the house as it was when moving in during the lease period.

※ ​​If you want to do interior renovation, you must obtain the landlord's consent.

• After the contract ends, the landlord must return the entire jeonse deposit to the tenant.

2. Monthly Rent

• A system where a certain amount of deposit is paid after a 1~2 year lease contract and the monthly usage fee (monthly rent) is paid.

• The deposit is usually 10~20 times the monthly rent.

• Usually, 10% of the deposit is paid as a deposit, and the balance is paid in full upon moving in.

※ If the contractor cancels the contract in the middle, the deposit cannot be returned,

and if the landlord breaks the contract, he/she must pay the contractor twice the deposit.

• The deposit is returned in full after the contract ends.

※ ​​If special circumstances arise, such as overdue monthly rent or utility bills, the amount can be deducted from the deposit and returned.

• The brokerage fee varies depending on the type of residence, area, and transaction amount.

→ A list of real estate properties that can speak foreign languages ​​can be found at the Seoul Real Estate Information Plaza (http://land.seoul.go.kr) operated by the Seoul Metropolitan Government.
`,

    hi: `
1. जीन्से (जमा प्रणाली)

 • एक प्रणाली जो मकान मालिक के पास एक निश्चित राशि जमा के रूप में जमा करती है और 1-2 साल के पट्टे पर हस्ताक्षर करने के बाद इसका उपयोग करती है।

 • अनुबंध पर हस्ताक्षर करते समय, किराये की राशि का 10% डाउन पेमेंट के रूप में भुगतान करें, और जब आप आगे बढ़ें तो शेष राशि का भुगतान करें।

 • किरायेदार को किराये की अवधि के दौरान अधिभोग के समय घर की स्थिति बनाए रखनी होगी।

 ※ यदि आप आंतरिक सजावट का काम करना चाहते हैं, तो आपको मकान मालिक से सहमति लेनी होगी।

 • अनुबंध समाप्त होने के बाद, मकान मालिक को किरायेदार को पूरा किराया वापस करना होगा।

2. मासिक किराया

 • एक प्रणाली जहां आप 1-2 साल के पट्टे पर हस्ताक्षर करने के बाद एक छोटी जमा राशि और मासिक उपयोग शुल्क (मासिक किराया) का भुगतान करते हैं।

 • जमा आम तौर पर भुगतान किए गए मासिक किराए का 10 से 20 गुना होता है।

 • आमतौर पर, जमा राशि का 10% डाउन पेमेंट के रूप में भुगतान किया जाता है, और जब आप आगे बढ़ते हैं तो शेष राशि का पूरा भुगतान किया जाता है।

 ※ यदि ठेकेदार बीच में ही अनुबंध समाप्त कर देता है, तो डाउन पेमेंट वापस नहीं किया जा सकता।

 यदि मकान मालिक अनुबंध तोड़ता है, तो उसे ठेकेदार को जमा राशि का दोगुना भुगतान करना होगा।

 • सिद्धांत रूप में, अनुबंध की समाप्ति पर जमा राशि पूरी लौटा दी जाती है।

 ※ यदि कोई विशेष स्थिति होती है, जैसे मासिक किराया या उपयोगिता बिल में देरी, तो जमा राशि घटाकर राशि वापस की जा सकती है।

 • ब्रोकरेज शुल्क आवास के प्रकार, क्षेत्र और लेनदेन राशि के आधार पर भिन्न होता है।

 → विदेशी भाषाओं का समर्थन करने वाली रियल एस्टेट की सूची सियोल मेट्रोपॉलिटन सरकार द्वारा संचालित सियोल रियल एस्टेट सूचना प्लाजा (http://land.seoul.go.kr) पर पाई जा सकती है।
`,

    vi: `
1. Jeonse (hệ thống gửi tiền)

 • Một hệ thống đặt cọc một số tiền nhất định cho chủ nhà và sử dụng số tiền đó sau khi ký hợp đồng thuê 1-2 năm.

 • Khi ký hợp đồng, thanh toán trước 10% số tiền thuê và thanh toán số còn lại khi nhận nhà.

 • Người thuê nhà phải duy trì tình trạng của ngôi nhà tại thời điểm sử dụng trong suốt thời gian thuê.

 ※ Nếu bạn muốn thực hiện công việc trang trí nội thất, bạn phải được sự đồng ý của chủ nhà.

 • Sau khi chấm dứt hợp đồng, chủ nhà phải trả lại toàn bộ tiền thuê cho người thuê.

2. Tiền thuê hàng tháng

 • Hệ thống mà bạn phải trả một khoản đặt cọc nhỏ và phí sử dụng hàng tháng (tiền thuê hàng tháng) sau khi ký hợp đồng thuê 1-2 năm.

 • Số tiền đặt cọc thường bằng 10 đến 20 lần số tiền thuê nhà hàng tháng.

 • Thông thường, 10% tiền đặt cọc sẽ được trả dưới dạng trả trước và số còn lại sẽ được thanh toán đầy đủ khi bạn chuyển đến.

 ※ Nếu nhà thầu chấm dứt hợp đồng giữa chừng thì khoản tiền đặt cọc sẽ không được hoàn lại.

 Nếu chủ nhà vi phạm hợp đồng thì phải nộp gấp đôi số tiền đặt cọc cho nhà thầu.

 • Về nguyên tắc, tiền đặt cọc sẽ được hoàn trả đầy đủ khi chấm dứt hợp đồng.

 ※ Nếu xảy ra trường hợp đặc biệt, chẳng hạn như tiền thuê nhà hàng tháng hoặc hóa đơn tiện ích bị chậm trễ, số tiền có thể được hoàn lại trừ đi tiền đặt cọc.

 • Phí môi giới khác nhau tùy thuộc vào loại nhà, diện tích và số tiền giao dịch.

 → Danh sách bất động sản hỗ trợ tiếng nước ngoài có thể được tìm thấy tại Trung tâm Thông tin Bất động sản Seoul (http://land.seoul.go.kr) do Chính quyền Thành phố Seoul điều hành.
`,

    ru: `
1. Чонсе (депозитная система)

 • Система, которая вносит определенную сумму денег арендодателю в качестве залога и использует ее после подписания договора аренды на 1-2 года.

 • При подписании договора внесите 10 % от суммы аренды в качестве первоначального взноса, а остаток оплатите при заселении.

 • Арендатор должен поддерживать состояние дома на момент заселения в течение периода аренды.

 ※ Если вы желаете провести работы по внутренней отделке, вам необходимо получить согласие арендодателя.

 • После расторжения договора арендодатель должен вернуть арендатору полную арендную плату.

2. Ежемесячная арендная плата

 • Система, при которой вы платите небольшой депозит и ежемесячную плату за использование (ежемесячную арендную плату) после подписания договора аренды на 1-2 года.

 • Залог обычно в 10–20 раз превышает ежемесячную арендную плату.

 • Обычно 10 % от залога выплачивается в качестве первоначального взноса, а оставшаяся часть выплачивается полностью при заселении.

 ※ Если подрядчик расторгает договор на полпути, первоначальный взнос не подлежит возврату.

 Если арендодатель нарушает договор, он или она должны заплатить подрядчику двойную сумму залога.

 • В принципе, депозит возвращается в полном объеме при расторжении договора.

 ※ В случае возникновения особой ситуации, например, задержки ежемесячной арендной платы или оплаты коммунальных услуг, сумма может быть возвращена за вычетом залога.

 • Брокерские сборы варьируются в зависимости от типа жилья, района и суммы сделки.

 → Список недвижимости, поддерживающей иностранные языки, можно найти на Информационной площади Сеула по недвижимости (http://land.seoul.go.kr), которой управляет столичное правительство Сеула.
`,

    zh: `
1. Jeonse（存款系统）

 • 向房东存入一定金额作为押金并在签订1-2 年租约后使用的制度。

 • 签订合同时，支付租金的10%作为首付款，余款在入住时支付。

 • 租客必须在租赁期间保持入住时房屋的状况。

 ※ 如果您想进行室内装修工作，必须征得房东的同意。

 • 合同终止后，房东必须将全部租金退还给租户。

2. 月租

 • 签订1-2年租约后支付少量押金和每月使用费（月租）的系统。

 • 押金通常为每月租金的10 至20 倍。

 • 通常，10% 的押金作为首付款，余款在您入住时全额支付。

 ※ 如果承包商中途终止合同，则预付款不能退还。

 如果房东违反合同，他或她必须向承包商支付双倍的押金。

 • 合同终止时，押金原则上全额退还。

 ※ 如果发生特殊情况，例如月租或水电费延迟支付，金额可能会在扣除押金后退还。

 • 经纪费用根据房屋类型、面积和交易金额而有所不同。

 → 可在首尔市运营的首尔不动产信息广场(http://land.seoul.go.kr)找到支持外语的不动产一览。
`,

    ja: `
1.チャーター（保証金制度）

 • 家主に一定金額をデポジットの形で預け、1～2年の賃貸借契約後に使用する制度。

 • 契約時にチャーター金額の10％を契約金で支払い、入居時に残金を支払います。

 •入居者は、借受期間中に入居時の住宅の状態を維持する必要があります。

 ※内部インテリア工事をしたい場合は、必ず家主の同意を求める必要があります。

 •契約が終了した後、家主はテナントにチャーターの全額を返す必要があります。

2. 家賃

 • 1～2年の賃貸借契約後、所定のデポジットを支払い、毎月使用料（月税）を支払う制度。

 • デポジットは通常、月額月額の10～20倍程度です。

 •通常、預金の10％を契約金として払い、入居時に残高を支払います。

 ※契約者が途中で契約を解除する場合、契約金を返金することができず、

 家主が契約を破棄した場合は、契約金の2倍を契約者に支払わなければなりません。

 ・デポジットは契約終了後に全額返却することが原則です。

 ※ 月税または公課金が押されるなど特殊状況が発生した場合、その金額分保証金から除外して返金することができます。

 •仲介手数料は住宅の種類、面積、取引金額によって異なります。

 →外国語対応不動産一覧はソウル市が運営するソウル不動産情報広場（http://land.seoul.go.kr）で確認できます。
`,

    th: `
1. Jeonse (ระบบเงินฝาก)

 • ระบบที่ฝากเงินจำนวนหนึ่งไว้กับเจ้าของบ้านเป็นเงินมัดจำและนำไปใช้หลังจากเซ็นสัญญาสัญญาเช่า 1-2 ปี

 • เมื่อเซ็นสัญญา ชำระเงินดาวน์ 10% ของค่าเช่า และชำระส่วนที่เหลือเมื่อย้ายเข้า

 • ผู้เช่าจะต้องรักษาสภาพของบ้าน ณ เวลาที่เข้าพักในช่วงระยะเวลาเช่า

 ※ หากคุณต้องการทำงานตกแต่งภายใน คุณต้องได้รับความยินยอมจากเจ้าของบ้าน

 • หลังจากสิ้นสุดสัญญาแล้วเจ้าของบ้านจะต้องคืนค่าเช่าเต็มจำนวนให้กับผู้เช่า

2.ค่าเช่ารายเดือน

 • ระบบที่คุณจ่ายเงินมัดจำเล็กน้อยและค่าธรรมเนียมการใช้รายเดือน (ค่าเช่ารายเดือน) หลังจากเซ็นสัญญาสัญญาเช่า 1-2 ปี

 • โดยปกติเงินมัดจำจะอยู่ที่ 10 ถึง 20 เท่าของค่าเช่ารายเดือนที่จ่าย

 • โดยทั่วไป 10% ของเงินมัดจำจะจ่ายเป็นเงินดาวน์ และส่วนที่เหลือจะชำระเต็มจำนวนเมื่อคุณย้ายเข้า

 ※ หากผู้รับเหมาบอกเลิกสัญญากลางคัน จะไม่สามารถคืนเงินดาวน์ได้

 หากเจ้าของบ้านผิดสัญญา เขาหรือเธอจะต้องจ่ายเงินมัดจำสองเท่าให้กับผู้รับเหมา

 • โดยหลักการแล้ว เงินมัดจำจะได้รับคืนเต็มจำนวนเมื่อสัญญาสิ้นสุดลง

 ※ หากเกิดสถานการณ์พิเศษ เช่น ความล่าช้าของค่าเช่ารายเดือนหรือค่าสาธารณูปโภค จำนวนเงินดังกล่าวอาจได้รับคืนหักด้วยเงินมัดจำ

 • ค่านายหน้าจะแตกต่างกันไปขึ้นอยู่กับประเภทที่อยู่อาศัย พื้นที่ และจำนวนธุรกรรม

 → รายชื่ออสังหาริมทรัพย์ที่รองรับภาษาต่างประเทศสามารถดูได้ที่โซลเรียลเอสเตทอินฟอร์เมชั่นพลาซ่า (http://land.seoul.go.kr) ดำเนินการโดยรัฐบาลกรุงโซล
`,

    tl: `
1. Jeonse (sistema ng deposito)

 • Isang sistema na nagdedeposito ng tiyak na halaga ng pera sa may-ari bilang deposito at ginagamit ito pagkatapos pumirma ng 1-2 taong pag-upa.

 • Kapag pumirma ng kontrata, magbayad ng 10% ng halaga ng rental bilang paunang bayad, at bayaran ang balanse kapag lumipat ka.

 • Dapat panatilihin ng nangungupahan ang kalagayan ng bahay sa oras ng pag-okupa sa panahon ng pag-upa.

 ※ Kung gusto mong magsagawa ng interior decoration, kailangan mong humingi ng pahintulot mula sa landlord.

 • Matapos wakasan ang kontrata, dapat ibalik ng may-ari ng lupa ang buong upa sa nangungupahan.

2. Buwanang upa

 • Isang sistema kung saan nagbabayad ka ng maliit na deposito at buwanang bayad sa paggamit (buwanang upa) pagkatapos pumirma ng 1-2 taong pag-upa.

 • Ang deposito ay karaniwang 10 hanggang 20 beses sa buwanang renta na binabayaran.

 • Karaniwan, 10% ng deposito ay binabayaran bilang paunang bayad, at ang balanse ay binabayaran nang buo kapag lumipat ka.

 ※ Kung tinapos ng contractor ang kontrata sa kalagitnaan, hindi na maibabalik ang paunang bayad.

 Kung sinira ng landlord ang kontrata, kailangan niyang bayaran ng dalawang beses ang deposito sa contractor.

 • Sa prinsipyo, ang deposito ay ibinalik nang buo sa pagtatapos ng kontrata.

 ※ Kung may naganap na espesyal na sitwasyon, tulad ng pagkaantala sa buwanang renta o mga bayarin sa utility, ang halaga ay maaaring i-refund minus ang deposito.

 • Ang mga bayad sa brokerage ay nag-iiba depende sa uri ng pabahay, lugar, at halaga ng transaksyon.

 → Isang listahan ng real estate na sumusuporta sa mga wikang banyaga ay matatagpuan sa Seoul Real Estate Information Plaza (http://land.seoul.go.kr) na pinamamahalaan ng Seoul Metropolitan Government.
`,

    uz: `
1. Jeonse (depozit tizimi)

 • Depozit sifatida uy egasiga ma'lum miqdorda pul qo'yadigan va 1-2 yillik ijara shartnomasini imzolaganidan keyin foydalanadigan tizim.

 • Shartnoma tuzayotganda ijara summasining 10 foizini boshlang‘ich to‘lov sifatida, qolganini esa ko‘chib o‘tganingizda to‘lang.

 • Ijarachi ijara muddati davomida yashash vaqtida uyning holatini saqlab turishi kerak.

 ※ Agar siz ichki bezatish ishlarini bajarishni istasangiz, uy egasining roziligini olishingiz kerak.

 • Shartnoma bekor qilingandan so'ng, uy egasi ijarachiga to'liq ijara haqini qaytarishi kerak.

2. Oylik ijara

 • 1-2 yillik ijara shartnomasini imzolaganingizdan so'ng kichik depozit va oylik foydalanish to'lovini (oylik ijara) to'laydigan tizim.

 • Depozit odatda oylik ijara haqining 10-20 baravarini tashkil qiladi.

 • Odatda, omonatning 10% boshlang‘ich to‘lov sifatida to‘lanadi, qolgan qismi esa ko‘chib kelganingizda to‘liq to‘lanadi.

 ※ Agar pudratchi shartnomani yarmida bekor qilsa, dastlabki to'lovni qaytarib bo'lmaydi.

 Agar uy egasi shartnomani buzsa, u pudratchiga ikki baravar to'lashi kerak.

 • Asosan, shartnoma bekor qilingandan keyin omonat to‘liq qaytariladi.

 ※ Agar oylik ijara yoki kommunal to'lovlar kechikishi kabi maxsus vaziyat yuzaga kelsa, summa depozitni olib tashlagan holda qaytarilishi mumkin.

 • Brokerlik to‘lovlari turar joy turi, hududi va tranzaksiya miqdoriga qarab farqlanadi.

 → Chet tillarni qo‘llab-quvvatlaydigan ko‘chmas mulk ro‘yxatini Seul Metropolitan hukumati tomonidan boshqariladigan Seul Real Estate Information Plaza (http://land.seoul.go.kr) da topish mumkin.
 `,
  },

  "Four Major Social Insurance Programs": {
    ko: `
1. 국민연금 (National Pension) 

  • 목적: 노후에 안정적인 생활을 지원하기 위해 월별로 적립금을 모아 연금을 지급합니다.

  • 가입 대상: 만 18세 ~ 59세의 모든 근로자 및 사업자. 

                       ※ 외국인도 한국에서 고용되어 있으면 국민연금에 가입해야 합니다.

  • 보험료 부담 

        근로자 - 월 소득의 **4.5%**를 납부합니다. 

        고용주 - 근로자의 보험료와 동일하게 **4.5%**를 추가 납부합니다.

        ※ 외국인에게 유의할 점: 외국인 근로자가 귀국할 경우, 본인의 기여금을 일시금으로 반환받을 수 있습니다. 
        
                                              ↑ 해당 국가와 상호협정이 있는 경우만 가능

2. 건강보험 (National Health Insurance) 

  • 목적: 질병이나 사고로 인한 의료비 부담을 줄여줍니다.

  • 가입 대상: 모든 외국인 근로자는 입국 후 6개월 이상 체류 시 가입 의무화, 
  
                       ↑ 고용 형태에 따라 회사에서 자동 가입되거나 개인이 직접 가입해야 합니다.

  • 보험료 부담
  
        근로자 - 월 소득의 **3.675%**를 납부합니다.
  
        고용주 - 근로자의 보험료와 동일하게 **3.675%**를 추가 납부합니다.

  • 혜택: 병원, 약국, 치과 등에서 의료 서비스를 받을 때 보험 혜택을 적용하며, 외국인도 내국인과 동일한 의료 혜택을 제공합니다.

3. 고용보험 (Employment Insurance) 

  • 목적: 실직 시 생계 지원과 재취업을 위한 교육, 훈련을 제공합니다. 

  • 가입 대상: 정규직, 계약직 등 대부분의 근로자.

                       ↑ 단시간 근로자(주 15시간 미만)나 일부 특수 직종은 가입이 제외됩니다.

  • 보험료 부담 

        근로자 : 월 소득의 **0.9%**를 납부합니다.  
        
        고용주 : 근로자 소득의 0.9% + 추가 부담금 ← 기업 규모 및 고용 형태에 따라 상이합니다.

  • 외국인 혜택: 대부분 외국인 근로자는 실업급여와 고용보험 혜택을 받을 수 있음. 
        
      ※ 고용허가제(E-9)로 근무하는 외국인 근로자는 실업급여 대상이 아닙니다. 

4. 산재보험 (Workers’ Compensation Insurance) 

  • 목적: 업무 중 사고나 질병으로 인해 발생한 의료비, 장애보상, 유족보상 등을 지원합니다. 

  • 가입 대상: 모든 근로자 ← 고용 형태나 근무 시간과 관계없이 자동 가입해야 합니다. 

  • 보험료 부담: 전액 고용주 부담 ← 근로자는 보험료를 납부하지 않습니다.

  • 혜택: 업무 중 부상, 질병 치료비 지원. 장애 발생 시 보상금 지급, 사망 시 유족 보상금 지급합니다. 

      ※ 외국인 근로자에 대한 특이 사항 

            - 보험 혜택 제한 여부: 고용 형태와 체류 자격에 따라 일부 보험(특히 고용보험)의 혜택이 제한될 수 있습니다. 
      
            - 본국과의 사회보장 협정: 한국과 외국인 근로자 본국 간 사회보장 협정이 있는 경우,

                                                    국민연금 또는 건강보험의 가입과 반환금 수령이 조정될 수 있습니다. 

            - 등록 및 관리: 외국인 등록증을 발급받으면 4대 보험 가입이 체계적으로 관리됩니다. 

★ 4대 보험 가입의 절차 

  • 회사에서 처리: 대부분의 경우, 고용주는 직원의 4대 보험 가입을 의무적으로 처리합니다. 
  
  • 직접 가입: 자영업자 또는 소득이 없는 경우, 본인이 직접 국민연금과 건강보험 가입 신청 가능합니다. 
  
  • 한국에서 근무하며 안정적인 생활을 유지하기 위해 4대 보험 가입은 필수입니다. 
      
✓ 관련 기관 : 고용주 / 근로복지공단 / 국민연금공단
`,
    en: `
1. National Pension

• Purpose: To support a stable life in old age, a pension is paid by collecting monthly savings.

• Subscription target: All workers and business owners aged 18 to 59.

※ Foreigners must also subscribe to the National Pension if they are employed in Korea.

• Insurance premium burden

Workers - pay **4.5%** of monthly income.

Employers - pay an additional **4.5%**, the same as the worker's insurance premium.

※ Note for foreigners: When a foreign worker returns to their home country, they can receive a lump sum refund of their contributions.

↑ Only possible if there is a mutual agreement with the relevant country

2. National Health Insurance

• Purpose: Reduces the burden of medical expenses due to illness or accident.

• Subscription target: All foreign workers are required to subscribe after staying for more than 6 months after entering the country.

↑ Depending on the type of employment, the company automatically subscribes or the individual must subscribe directly.

• Insurance premium burden

Workers - pay **3.675%** of monthly income.

Employers - pay an additional **3.675%**, the same as the workers' insurance premium.

• Benefits: Insurance benefits are applied when receiving medical services at hospitals, pharmacies, dental clinics, etc., and foreigners are provided with the same medical benefits as Korean nationals.

3. Employment Insurance

• Purpose: Provides livelihood support and education and training for reemployment in the event of unemployment.

• Subscription target: Most workers, including full-time and contract workers.

↑ Part-time workers (less than 15 hours per week) and some special occupations are excluded from subscription.

• Insurance premium burden

Workers: pay **0.9%** of monthly income.

Employers: 0.9% of workers' income + additional contribution ← Varies by company size and employment type.

• Foreigner benefits: Most foreign workers can receive unemployment benefits and employment insurance benefits.

※ Foreign workers working under the Employment Permit System (E-9) are not eligible for unemployment benefits.

4. Workers’ Compensation Insurance

• Purpose: Supports medical expenses, disability compensation, survivors’ compensation, etc. incurred due to work-related accidents or illnesses.

• Eligibility: All workers ← Must be automatically enrolled regardless of employment type or working hours.

• Insurance premium burden: Fully borne by employers ← Workers do not pay insurance premiums.

• Benefits: Support for treatment costs for injuries or illnesses during work. Compensation is paid in case of disability, and survivors’ compensation is paid in case of death.

※ ​​Special information for foreign workers

- Insurance benefit restrictions: Depending on employment type and residence status, benefits for some insurances (especially employment insurance) may be restricted.

- Social security agreement with home country: If there is a social security agreement between Korea and the foreign worker’s home country,

National pension or health insurance enrollment and receipt of refunds may be adjusted.

- Registration and Management: Once you receive your alien registration card, your four major insurance plans will be systematically managed.

★ Procedures for signing up for the four major insurance plans

• Processed by the company: In most cases, employers are required to sign up for the four major insurance plans for their employees.

• Direct sign-up: If you are self-employed or have no income, you can apply for national pension and health insurance yourself.

• Signing up for the four major insurance plans is essential to maintain a stable life while working in Korea.

✓ Related organizations: Employer / Korea Workers’ Compensation & Welfare Service / National Pension Service
`,

    hi: `
1. राष्ट्रीय पेंशन

 • उद्देश्य: सेवानिवृत्ति में स्थिर जीवन का समर्थन करना, मासिक बचत एकत्र करना और पेंशन का भुगतान करना।

 • पात्रता: 18 से 59 वर्ष के बीच के सभी श्रमिक और व्यवसाय मालिक।

 ※ यदि विदेशियों को कोरिया में रोजगार मिलता है तो उन्हें भी राष्ट्रीय पेंशन की सदस्यता लेनी होगी।

 • बीमा प्रीमियम का बोझ

 श्रमिक - मासिक आय का **4.5%** भुगतान करें।

 नियोक्ता - कर्मचारी के बीमा प्रीमियम के बराबर **4.5%** अतिरिक्त भुगतान करता है।

 ※ विदेशियों के लिए नोट: यदि कोई विदेशी कर्मचारी अपने देश लौटता है, तो उसका योगदान एकमुश्त वापस किया जा सकता है।

 ↑ केवल तभी उपलब्ध है जब संबंधित देश के साथ आपसी समझौता हो

2. राष्ट्रीय स्वास्थ्य बीमा

 • उद्देश्य: बीमारी या दुर्घटना के कारण चिकित्सा व्यय का बोझ कम करना।

 • सदस्यता के लिए पात्रता: सभी विदेशी श्रमिकों को देश में प्रवेश करने के बाद 6 महीने से अधिक समय तक रहने पर सदस्यता लेने की आवश्यकता होती है;

 ↑ आपके रोजगार के प्रकार के आधार पर, आपको कंपनी द्वारा स्वचालित रूप से नामांकित किया जा सकता है या आपको व्यक्तिगत रूप से साइन अप करना होगा।

 • बीमा प्रीमियम का बोझ

 श्रमिक - मासिक आय का **3.675%** भुगतान करें।

 नियोक्ता - कर्मचारी के प्रीमियम के बराबर **3.675%** अतिरिक्त भुगतान करता है।

 • लाभ: अस्पतालों, फार्मेसियों, दंत चिकित्सकों आदि में चिकित्सा सेवाएं प्राप्त करते समय बीमा लाभ लागू होते हैं, और विदेशियों को कोरियाई लोगों के समान चिकित्सा लाभ प्रदान किए जाते हैं।

3. रोजगार बीमा

 • उद्देश्य: बेरोजगारी की स्थिति में आजीविका सहायता और पुन: रोजगार के लिए शिक्षा और प्रशिक्षण प्रदान करना।

 • लक्षित दर्शक: अधिकांश श्रमिक, जिनमें पूर्णकालिक कर्मचारी और अनुबंध कर्मचारी शामिल हैं।

 ↑ अंशकालिक श्रमिकों (सप्ताह में 15 घंटे से कम) और कुछ विशेष व्यवसायों को सदस्यता से बाहर रखा गया है।

 • बीमा प्रीमियम का बोझ

 श्रमिक: मासिक आय का **0.9%** भुगतान करें।

 नियोक्ता: कर्मचारी आय का 0.9% + अधिभार ← कंपनी के आकार और रोजगार के प्रकार के आधार पर भिन्न होता है।

 • विदेशी लाभ: अधिकांश विदेशी कर्मचारी बेरोजगारी लाभ और रोजगार बीमा लाभ प्राप्त कर सकते हैं।

 ※ रोजगार परमिट प्रणाली (ई-9) के तहत काम करने वाले विदेशी कर्मचारी बेरोजगारी लाभ के लिए पात्र नहीं हैं।

4. श्रमिक मुआवज़ा बीमा

 • उद्देश्य: काम पर दुर्घटनाओं या बीमारियों के कारण होने वाले चिकित्सा व्यय, विकलांगता मुआवजा और शोक संतप्त परिवार के मुआवजे का समर्थन करना।

 • पात्रता: सभी श्रमिकों को रोजगार के प्रकार या काम के घंटों की परवाह किए बिना स्वचालित रूप से नामांकित होना चाहिए।

 • बीमा प्रीमियम: पूर्ण नियोक्ता जिम्मेदारी ← कर्मचारी बीमा प्रीमियम का भुगतान नहीं करते हैं।

 • लाभ: काम से संबंधित चोटों और बीमारियों के इलाज की लागत में सहायता। विकलांगता के मामले में मुआवजा दिया जाता है, और मृत्यु के मामले में जीवित बचे लोगों को मुआवजा दिया जाता है।

 ※ विदेशी कामगारों से संबंधित विशेष बातें

 - बीमा लाभों पर प्रतिबंध: रोजगार के प्रकार और निवास की स्थिति के आधार पर, कुछ बीमा (विशेषकर रोजगार बीमा) के लाभ सीमित हो सकते हैं।

 - स्वदेश के साथ सामाजिक सुरक्षा समझौता: यदि कोरिया और विदेशी कर्मचारी के गृह देश के बीच कोई सामाजिक सुरक्षा समझौता है,

 राष्ट्रीय पेंशन या स्वास्थ्य बीमा में नामांकन और रिफंड की प्राप्ति को समायोजित किया जा सकता है।

 - पंजीकरण और प्रबंधन: एक बार जब आप अपना विदेशी पंजीकरण कार्ड प्राप्त कर लेते हैं, तो चार प्रमुख बीमा पॉलिसियों के लिए आपकी सदस्यता व्यवस्थित रूप से प्रबंधित की जाएगी।

★ 4 प्रमुख बीमा पॉलिसियों के लिए साइन अप करने की प्रक्रिया

 • कंपनी द्वारा संसाधित: ज्यादातर मामलों में, नियोक्ताओं को कर्मचारियों को चार प्रमुख बीमा पॉलिसियों के लिए साइन अप करने की आवश्यकता होती है।

 • प्रत्यक्ष सदस्यता: यदि आप स्व-रोज़गार हैं या आपकी कोई आय नहीं है, तो आप स्वयं राष्ट्रीय पेंशन और स्वास्थ्य बीमा के लिए आवेदन कर सकते हैं।

 • कोरिया में काम करते हुए स्थिर जीवन बनाए रखने के लिए, चार प्रमुख बीमा पॉलिसियों के लिए साइन अप करना आवश्यक है।

✓ संबंधित संगठन: नियोक्ता / कोरिया श्रमिक मुआवजा और कल्याण सेवा / राष्ट्रीय पेंशन सेवा
`,

    vi: `
1. Lương hưu quốc gia

 • Mục đích: Hỗ trợ cuộc sống ổn định khi về hưu, tích lũy tiền tiết kiệm hàng tháng và trả lương hưu.

 • Đủ điều kiện: Tất cả người lao động và chủ doanh nghiệp trong độ tuổi từ 18 đến 59.

 ※ Người nước ngoài cũng phải đăng ký hưởng lương hưu quốc gia nếu họ làm việc tại Hàn Quốc.

 • Gánh nặng phí bảo hiểm

 Người lao động - Trả **4,5%** thu nhập hàng tháng.

 Người sử dụng lao động - Trả thêm **4,5%** bằng phí bảo hiểm của nhân viên.

 ※ Lưu ý đối với người nước ngoài: Nếu người lao động nước ngoài trở về nước, khoản đóng góp của người đó có thể được hoàn lại một lần.

 ↑ Chỉ khả dụng nếu có thỏa thuận chung với quốc gia được đề cập

2. Bảo hiểm y tế quốc gia

 • Mục đích: Giảm bớt gánh nặng chi phí y tế do ốm đau, tai nạn.

 • Điều kiện đăng ký: Tất cả người lao động nước ngoài phải đăng ký nếu họ ở lại hơn 6 tháng sau khi nhập cảnh;

 ↑ Tùy thuộc vào loại công việc của bạn, bạn có thể được công ty tự động đăng ký hoặc bạn phải đăng ký cá nhân.

 • Gánh nặng phí bảo hiểm

 Người lao động - Trả **3,675%** thu nhập hàng tháng.

 Người sử dụng lao động - Trả thêm **3,675%** bằng phí bảo hiểm của nhân viên.

 • Quyền lợi: Quyền lợi bảo hiểm được áp dụng khi sử dụng dịch vụ y tế tại bệnh viện, nhà thuốc, nha khoa… và người nước ngoài được hưởng quyền lợi y tế như người Hàn Quốc.

3. Bảo hiểm việc làm

 • Mục đích: Hỗ trợ sinh kế trong trường hợp thất nghiệp và giáo dục đào tạo để tái tạo việc làm.

 • Đối tượng: Hầu hết người lao động, bao gồm cả người lao động toàn thời gian và người lao động hợp đồng.

 ↑ Người lao động bán thời gian (dưới 15 giờ một tuần) và một số nghề đặc biệt bị loại khỏi tư cách thành viên.

 • Gánh nặng phí bảo hiểm

 Người lao động: Trả **0,9%** thu nhập hàng tháng.

 Người sử dụng lao động: 0,9% thu nhập của nhân viên + phụ phí ← Thay đổi tùy thuộc vào quy mô công ty và loại hình việc làm.

 • Phúc lợi nước ngoài: Hầu hết người lao động nước ngoài đều có thể nhận được trợ cấp thất nghiệp và trợ cấp bảo hiểm việc làm.

 ※ Người lao động nước ngoài làm việc theo Hệ thống Giấy phép Lao động (E-9) không đủ điều kiện nhận trợ cấp thất nghiệp.

4. Bảo hiểm bồi thường cho người lao động

 • Mục đích: Hỗ trợ chi phí y tế, bồi thường thương tật và bồi thường tang quyến cho gia đình do tai nạn hoặc bệnh tật tại nơi làm việc.

 • Đủ điều kiện: Tất cả người lao động ← phải được đăng ký tự động bất kể loại hình việc làm hoặc giờ làm việc.

 • Phí bảo hiểm: Người sử dụng lao động hoàn toàn chịu trách nhiệm ← Người lao động không đóng phí bảo hiểm.

 • Quyền lợi: Hỗ trợ chi phí điều trị thương tích và bệnh tật liên quan đến công việc. Trường hợp tàn tật thì được bồi thường, trường hợp tử vong thì được bồi thường cho người sống sót.

 ※ Những vấn đề đặc biệt liên quan đến người lao động nước ngoài

 - Hạn chế về quyền lợi bảo hiểm: Tùy theo loại hình việc làm và tình trạng cư trú, quyền lợi của một số loại bảo hiểm (đặc biệt là bảo hiểm việc làm) có thể bị hạn chế.

 - Thỏa thuận an sinh xã hội với nước sở tại: Nếu có thỏa thuận an sinh xã hội giữa Hàn Quốc và nước sở tại của người lao động nước ngoài,

 Việc đăng ký hưởng lương hưu quốc gia hoặc bảo hiểm y tế và nhận tiền hoàn lại có thể được điều chỉnh.

 - Đăng ký và quản lý: Sau khi bạn nhận được thẻ đăng ký người nước ngoài, việc đăng ký bốn hợp đồng bảo hiểm chính của bạn sẽ được quản lý một cách có hệ thống.

★ Thủ tục đăng ký 4 hợp đồng bảo hiểm lớn

 • Do công ty xử lý: Trong hầu hết các trường hợp, người sử dụng lao động yêu cầu người lao động phải đăng ký 4 hợp đồng bảo hiểm chính.

 • Đăng ký trực tiếp: Nếu bạn tự kinh doanh hoặc không có thu nhập, bạn có thể tự mình đăng ký hưởng lương hưu và bảo hiểm y tế quốc gia.

 • Để duy trì cuộc sống ổn định khi làm việc tại Hàn Quốc, việc đăng ký 4 hợp đồng bảo hiểm lớn là điều cần thiết.

✓ Các tổ chức liên quan: Người sử dụng lao động / Dịch vụ phúc lợi và bồi thường cho người lao động Hàn Quốc / Dịch vụ hưu trí quốc gia
`,

    ru: `
1. Национальная пенсия

 • Цель: Поддерживать стабильную жизнь на пенсии, собирать ежемесячные сбережения и выплачивать пенсию.

 • Право на участие: все работники и владельцы бизнеса в возрасте от 18 до 59 лет.

 ※ Иностранцы также должны подписаться на национальную пенсию, если они работают в Корее.

 • Бремя страховых премий

 Рабочие — платите **4,5%** от ежемесячного дохода.

 Работодатель – выплачивает дополнительно **4,5%**, равные страховому взносу работника.

 ※ Примечание для иностранцев: если иностранный работник возвращается в свою страну, его вклад может быть возвращен единовременно.

 ↑ Доступно только при наличии взаимного соглашения с соответствующей страной.

2. Национальное медицинское страхование

 • Цель: снизить бремя медицинских расходов в связи с болезнью или несчастным случаем.

 • Право на подписку: Все иностранные работники обязаны подписаться, если они остаются в стране более 6 месяцев после въезда в страну;

 ↑ В зависимости от вашего типа занятости вы можете быть автоматически зачислены компанией или вам придется зарегистрироваться лично.

 • Бремя страховых премий

 Рабочие — платите **3,675%** от ежемесячного дохода.

 Работодатель — выплачивает дополнительно **3,675%** в размере премии работника.

 • Льготы: Страховые льготы применяются при получении медицинских услуг в больницах, аптеках, у стоматологов и т. д., и иностранцам предоставляются те же медицинские льготы, что и корейцам.

3. Страхование занятости

 • Цель: Обеспечить поддержку средств к существованию в случае безработицы, а также образование и подготовку для повторного трудоустройства.

 • Целевая аудитория: Большинство работников, в том числе штатных и контрактных работников.

 ↑ Из членства исключены работники, работающие неполный рабочий день (менее 15 часов в неделю) и некоторые специальные профессии.

 • Бремя страховых премий

 Рабочие: платите **0,9%** от ежемесячного дохода.

 Работодатель: 0,9% от дохода сотрудника + надбавка ← Зависит от размера компании и типа занятости.

 • Пособия для иностранных граждан: Большинство иностранных рабочих могут получать пособия по безработице и пособия по страхованию занятости.

 ※ Иностранные работники, работающие по системе разрешений на работу (E-9), не имеют права на пособие по безработице.

4. Компенсационное страхование работников

 • Цель: Покрыть медицинские расходы, компенсацию по инвалидности и компенсацию семьям, потерявшим близких, понесенным в результате несчастных случаев или заболеваний на работе.

 • Право на участие: Все работники ← должны быть зачислены автоматически, независимо от типа занятости или рабочего времени.

 • Страховые взносы: Полная ответственность работодателя ← Сотрудники не платят страховые взносы.

 • Льготы: Помощь в покрытии расходов на лечение травм и заболеваний, связанных с работой. Компенсация выплачивается в случае утраты трудоспособности, а в случае смерти выплачивается компенсация оставшимся в живых.

 ※ Особые вопросы, касающиеся иностранных работников

 - Ограничения на страховые выплаты: В зависимости от типа занятости и статуса проживания, льготы по некоторым видам страхования (особенно по страхованию занятости) могут быть ограничены.

 - Соглашение о социальном обеспечении со страной происхождения: если между Кореей и страной происхождения иностранного работника существует соглашение о социальном обеспечении,

 Зачисление в национальную пенсию или медицинское страхование и получение возмещения могут быть скорректированы.

 - Регистрация и управление: как только вы получите регистрационную карту иностранца, ваша подписка на четыре основных страховых полиса будет систематически управляться.

★ Процедура оформления 4-х основных страховых полисов

 • Обрабатывается компанией: в большинстве случаев работодатели требуют от сотрудников подписки на четыре основных страховых полиса.

 • Прямая подписка: Если вы работаете не по найму или не имеете дохода, вы можете подать заявление на получение национальной пенсии и медицинского страхования самостоятельно.

 • Чтобы поддерживать стабильную жизнь во время работы в Корее, необходимо оформить четыре основных страховых полиса.

✓ Связанные организации: Работодатель / Служба компенсаций и социального обеспечения работников Кореи / Национальная пенсионная служба
`,

    zh: `
1. 国民年金

 • 目的：支持稳定的退休生活，每月收取储蓄并支付养老金。

 • 资格：所有年龄在 18 岁至 59 岁之间的工人和企业主。

 ※ 外国人在韩国就业时也必须缴纳国民年金。

 • 保险费负担

 工人 - 支付月收入的 **4.5%**。

 雇主 - 额外支付相当于雇员保险费的 **4.5%**。

 ※ 外国人请注意：如果外国工人回国，其缴费可能会被一次性返还。

 ↑ 仅当与相关国家达成共同协议时可用

2. 国民健康保险

 • 目的：减轻因疾病或事故造成的医疗费用负担。

 • 认购资格：所有外籍劳工入境后停留时间超过6个月者均须认购；

 ↑ 根据您的就业类型，您可能会被公司自动注册，或者您必须亲自注册。

 • 保险费负担

 工人 - 支付月收入的 **3.675%**。

 雇主 - 额外支付相当于雇员保险费的 **3.675%**。

 • 福利：在医院、药店、牙医等接受医疗服务时适用保险福利，外国人享受与韩国人相同的医疗福利。

3.就业保险

 • 目的：提供失业时的生计支持以及再就业的教育和培训。

 • 目标受众：大多数工人，包括全职工人和合同工。

 ^ 兼职工人（每周少于15小时）和一些特殊职业不属于会员资格。

 • 保险费负担

 工人：支付月收入的 **0.9%**。

 雇主：员工收入的 0.9% + 附加费 ← 根据公司规模和雇佣类型而变化。

 • 外国人福利：大多数外国工人可以获得失业救济金和就业保险福利。

 ※ 就业许可制度（E-9）外籍劳动者不享受失业救济金。

4.工伤赔偿保险

 • 目的：支持因工作事故或疾病而产生的医疗费用、伤残赔偿和死者家属赔偿。

 • 资格：所有工人← 必须自动注册，无论就业类型或工作时间如何。

 • 保险费：雇主承担全部责任 ← 雇员不支付保险费。

 • 福利：协助支付工伤和疾病的治疗费用。残疾时给予补偿，死亡时给予幸存者补偿。

 ※ 关于外籍劳工的特别事项

 - 保险福利的限制：根据就业类型和居住状况，某些保险（尤其是就业保险）的福利可能会受到限制。

 - 与本国的社会保障协议：如果韩国与外国工人的祖国之间有社会保障协议，

 国民年金或健康保险的加入及退还金额可能会有所调整。

 - 登记及管理：收到外国人登记卡后，您所投保的四大保险将得到系统管理。

★ 四大险种投保流程

 • 由公司办理：在大多数情况下，雇主会要求员工购买四大保险。

 • 直接参保：如果​​您是个体户或没有收入，可以自行申请国民养老保险和健康保险。

 • 为了在韩国工作期间保持稳定的生活，加入四大保险是必不可少的。

✓ 相关机构：雇主/韩国劳动者补偿福利院/国民年金公团
`,

    ja: `
1. 国民年金(National Pension)

 •目的：老後の安定的な生活を支援するために毎月の積立金を集めて年金を支払う。

 •購読対象：18歳から59歳までのすべての労働者と事業者。

 ※外国人も韓国で雇用されている場合は、国民年金に加入する必要があります。

 •保険料の負担

 労働者 - 月収の**4.5％**を支払います。

 雇用主 - 労働者の保険料と同じように**4.5%**を追加支払います。

 ※外国人に留意する点：外国人労働者が帰国する場合、本人の寄与金を一時金で返還することができます。

 ↑該当国との相互協定がある場合のみ可能

2. 健康保険 (National Health Insurance)

 •目的：病気や事故による医療費の負担を軽減します。

 •加入対象：すべての外国人労働者は、入国後6ヶ月以上滞在した場合の加入義務化、

 ↑雇用形態に応じて会社から自動加入するか、個人が直接加入する必要があります。

 •保険料の負担

 労働者 - 月収の**3.675%**を支払います。

 雇用主 - 労働者の保険料と同じように**3.675%**を追加支払います。

 •給付：病院、薬局、歯科などで医療サービスを受けるときに保険給付を適用し、外国人も内国人と同じ医療給付を提供します。

3. 雇用保険 (Employment Insurance)

 •目的：失業時に生計支援と再就職のための教育と訓練を提供します。

 •購読対象：正規職、契約職など、ほとんどの労働者。

 ↑短時間労働者（週15時間未満）や一部の特殊職種は加入が除外されます。

 •保険料の負担

 労働者：月収の**0.9％**を支払います。

 雇用主：労働者所得の0.9％+追加負担金←企業の規模と雇用形態によって異なります。

 •外国人給付：ほとんどの場合、外国人労働者は失業給付と雇用保険給付を受けることができます。

 ※雇用許可制（E-9）で勤務する外国人労働者は失業給与対象ではありません。

4. 労災保険 (Workers’ Compensation Insurance)

 •目的：業務中の事故や病気によって発生した医療費、障害補償、遺族補償などを支援します。

 •購読対象：すべての労働者←雇用形態や勤務時間に関係なく自動的に購読する必要があります。

 •保険料の負担：全額雇用者の負担←労働者は保険料を支払いません。

 •特典：仕事中の怪我、病気の治療費のサポート。障害発生時に補償金支給、死亡時遺族補償金支給します。

 ※外国人労働者に対する特異事項

 - 保険給付制限の有無：雇用形態と在留資格によって一部保険（特に雇用保険）の給付が制限される場合があります。

 - 本国との社会保障協定：韓国と外国人労働者本国間の社会保障協定がある場合、

 国民年金または健康保険の加入と返金の受領が調整されることがあります。

 - 登録と管理：外国人登録証の発行を受けると、4大保険加入が体系的に管理されます。

★4大保険加入の手続き

 •会社での処理：ほとんどの場合、雇用主は従業員の4つの保険契約を義務的に処理します。

 • 直接加入：自営業者または所得がない場合、本人が直接国民年金と健康保険の加入申請が可能です。

 •韓国で働いて安定した生活を維持するために、4大保険の加入は必須です。

✓関連機関：雇用主/労働福祉公団/国民年金公団
`,

    th: `
1. เงินบำนาญแห่งชาติ

 • วัตถุประสงค์: เพื่อดำรงชีวิตอย่างมั่นคงในวัยเกษียณ เก็บเงินออมทุกเดือนและจ่ายเงินบำนาญ

 • คุณสมบัติ: พนักงานและเจ้าของธุรกิจทุกคนที่มีอายุระหว่าง 18 ถึง 59 ปี

 ※ ชาวต่างชาติจะต้องสมัครรับเงินบำนาญแห่งชาติด้วยหากพวกเขาทำงานในประเทศเกาหลี

 • ภาระเบี้ยประกันภัย

 คนงาน - จ่าย **4.5%** ของรายได้ต่อเดือน

 นายจ้าง - จ่ายเพิ่ม **4.5%** เท่ากับเบี้ยประกันของลูกจ้าง

 ※ หมายเหตุสำหรับชาวต่างชาติ: หากแรงงานต่างชาติเดินทางกลับประเทศของตน เงินสมทบของเขาหรือเธออาจได้รับคืนเป็นเงินก้อน

 ↑ ใช้ได้เฉพาะเมื่อมีข้อตกลงร่วมกันกับประเทศที่เป็นปัญหาเท่านั้น

2. การประกันสุขภาพแห่งชาติ

 • วัตถุประสงค์: ลดภาระค่ารักษาพยาบาลเนื่องจากการเจ็บป่วยหรืออุบัติเหตุ

 • สิทธิในการสมัครสมาชิก: แรงงานต่างด้าวทุกคนจะต้องสมัครสมาชิกหากอยู่เกิน 6 เดือนหลังจากเข้าประเทศ

 ↑ คุณอาจได้รับการลงทะเบียนโดยบริษัทโดยอัตโนมัติหรือคุณต้องลงทะเบียนด้วยตนเอง ทั้งนี้ขึ้นอยู่กับประเภทการจ้างงานของคุณ

 • ภาระเบี้ยประกันภัย

 คนงาน - จ่าย **3.675%** ของรายได้ต่อเดือน

 นายจ้าง - จ่ายเพิ่ม **3.675%** เท่ากับเบี้ยประกันภัยของพนักงาน

 • สิทธิประโยชน์: สิทธิประโยชน์จากการประกันภัยจะใช้เมื่อรับบริการทางการแพทย์ที่โรงพยาบาล ร้านขายยา ทันตแพทย์ ฯลฯ และชาวต่างชาติจะได้รับสิทธิประโยชน์ทางการแพทย์เช่นเดียวกับชาวเกาหลี

3. การประกันภัยการจ้างงาน

 • วัตถุประสงค์: เพื่อให้การสนับสนุนการดำรงชีวิตในกรณีว่างงานและให้การศึกษาและการฝึกอบรมสำหรับการจ้างงานใหม่

 • กลุ่มเป้าหมาย: คนงานส่วนใหญ่ รวมถึงคนงานเต็มเวลาและพนักงานสัญญาจ้าง

 ↑ พนักงานพาร์ทไทม์ (น้อยกว่า 15 ชั่วโมงต่อสัปดาห์) และอาชีพพิเศษบางอาชีพไม่รวมอยู่ในการเป็นสมาชิก

 • ภาระเบี้ยประกันภัย

 คนงาน: จ่าย **0.9%** ของรายได้ต่อเดือน

 นายจ้าง: 0.9% ของรายได้พนักงาน + ค่าธรรมเนียมเพิ่มเติม ← ขึ้นอยู่กับขนาดบริษัทและประเภทการจ้างงาน

 • สวัสดิการต่างประเทศ: แรงงานต่างชาติส่วนใหญ่สามารถรับสิทธิประโยชน์การว่างงานและสิทธิประโยชน์ประกันการจ้างงาน

 ※ แรงงานต่างด้าวที่ทำงานภายใต้ระบบใบอนุญาตการจ้างงาน (E-9) ไม่มีสิทธิ์ได้รับสิทธิประโยชน์การว่างงาน

4. การประกันเงินทดแทนแรงงาน

 • วัตถุประสงค์: เพื่อสนับสนุนค่ารักษาพยาบาล ค่าชดเชยความทุพพลภาพ และค่าชดเชยครอบครัวผู้สูญเสียอันเนื่องมาจากอุบัติเหตุหรือการเจ็บป่วยในที่ทำงาน

 • คุณสมบัติ: พนักงานทุกคน ← จะต้องลงทะเบียนโดยอัตโนมัติ โดยไม่คำนึงถึงประเภทการจ้างงานหรือชั่วโมงทำงาน

 • เบี้ยประกัน: ความรับผิดชอบของนายจ้างเต็มจำนวน ← พนักงานไม่ต้องจ่ายเบี้ยประกัน

 • สวัสดิการ: ช่วยเหลือค่ารักษาอาการบาดเจ็บและความเจ็บป่วยจากการทำงาน จะมีการจ่ายค่าชดเชยในกรณีทุพพลภาพ และจะจ่ายค่าชดเชยให้กับผู้รอดชีวิตในกรณีที่เสียชีวิต

 ※ เรื่องพิเศษเกี่ยวกับแรงงานต่างชาติ

 - ข้อจำกัดเกี่ยวกับสิทธิประโยชน์การประกัน: ขึ้นอยู่กับประเภทการจ้างงานและสถานะการพำนัก สิทธิประโยชน์ของการประกันภัยบางรายการ (โดยเฉพาะการประกันการจ้างงาน) อาจถูกจำกัด

 - ข้อตกลงประกันสังคมกับประเทศบ้านเกิด: หากมีข้อตกลงประกันสังคมระหว่างเกาหลีกับประเทศบ้านเกิดของแรงงานต่างด้าว

 การลงทะเบียนในบำนาญแห่งชาติหรือประกันสุขภาพและการคืนเงินอาจมีการปรับเปลี่ยนได้

 - การลงทะเบียนและการจัดการ: เมื่อคุณได้รับบัตรประจำตัวคนต่างด้าวแล้ว การสมัครสมาชิกกรมธรรม์ประกันภัยหลักทั้ง 4 ประการจะได้รับการจัดการอย่างเป็นระบบ

★ ขั้นตอนการสมัครกรมธรรม์ประกันภัยหลัก 4 ประการ

 • ดำเนินการโดยบริษัท: ในกรณีส่วนใหญ่ นายจ้างกำหนดให้ลูกจ้างต้องสมัครกรมธรรม์ประกันภัยหลัก 4 ฉบับ

 • สมัครสมาชิกโดยตรง: หากคุณประกอบอาชีพอิสระหรือไม่มีรายได้ คุณสามารถสมัครขอรับเงินบำนาญและประกันสุขภาพได้ด้วยตนเอง

 • เพื่อรักษาชีวิตที่มั่นคงขณะทำงานในเกาหลี การลงทะเบียนกรมธรรม์หลักทั้งสี่ฉบับถือเป็นสิ่งสำคัญ

✓ องค์กรที่เกี่ยวข้อง: นายจ้าง / บริการชดเชยและสวัสดิการแรงงานเกาหลี / บริการบำนาญแห่งชาติ
`,

    tl: `
1. Pambansang Pensiyon

 • Layunin: Upang suportahan ang isang matatag na buhay sa pagreretiro, mangolekta ng buwanang ipon at magbayad ng pensiyon.

 • Pagiging Karapat-dapat: Lahat ng manggagawa at may-ari ng negosyo sa pagitan ng edad na 18 at 59.

 ※ Dapat ding mag-subscribe sa national pension ang mga dayuhan kung sila ay nagtatrabaho sa Korea.

 • Pasanin sa premium ng insurance

 Mga Manggagawa - Magbayad **4.5%** ng buwanang kita.

 Employer - Nagbabayad ng karagdagang **4.5%** na katumbas ng insurance premium ng empleyado.

 ※ Paalala sa mga dayuhan: Kung ang isang dayuhang manggagawa ay bumalik sa kanyang bansa, ang kanyang kontribusyon ay maaaring ibalik sa isang lump sum.

 ↑ Available lamang kung mayroong mutual agreement sa bansang pinag-uusapan

2. National Health Insurance

 • Layunin: Bawasan ang pasanin ng mga gastusing medikal dahil sa sakit o aksidente.

 • Pagiging karapat-dapat para sa suskrisyon: Lahat ng mga dayuhang manggagawa ay kinakailangang mag-subscribe kung mananatili sila ng higit sa 6 na buwan pagkatapos makapasok sa bansa;

 ↑ Depende sa uri ng iyong trabaho, maaari kang awtomatikong ma-enroll ng kumpanya o dapat kang personal na mag-sign up.

 • Pasanin sa premium ng insurance

 Mga Manggagawa - Magbayad **3.675%** ng buwanang kita.

 Employer - Nagbabayad ng karagdagang **3.675%** na katumbas ng premium ng empleyado.

 • Mga Benepisyo: Ang mga benepisyo sa insurance ay inilalapat kapag tumatanggap ng mga serbisyong medikal sa mga ospital, parmasya, dentista, atbp., at ang mga dayuhan ay binibigyan ng parehong mga medikal na benepisyo gaya ng mga Koreano.

3. Seguro sa Pagtatrabaho

 • Layunin: Upang magbigay ng suporta sa kabuhayan kung sakaling magkaroon ng kawalan ng trabaho at edukasyon at pagsasanay para sa muling pagtatrabaho.

 • Target na madla: Karamihan sa mga manggagawa, kabilang ang mga full-time na manggagawa at mga manggagawang kontrata.

 ↑ Ang mga part-time na manggagawa (mas mababa sa 15 oras sa isang linggo) at ilang mga espesyal na trabaho ay hindi kasama sa pagiging miyembro.

 • Pasanin sa premium ng insurance

 Mga Manggagawa: Magbayad **0.9%** ng buwanang kita.

 Employer: 0.9% ng kita ng empleyado + surcharge ← Nag-iiba depende sa laki ng kumpanya at uri ng trabaho.

 • Mga benepisyo sa dayuhan: Karamihan sa mga dayuhang manggagawa ay maaaring makatanggap ng mga benepisyo sa kawalan ng trabaho at mga benepisyo sa insurance sa trabaho.

 ※ Ang mga dayuhang manggagawa na nagtatrabaho sa ilalim ng Employment Permit System (E-9) ay hindi karapat-dapat para sa mga benepisyo sa pagkawala ng trabaho.

4. Insurance sa Kompensasyon ng mga Manggagawa

 • Layunin: Upang suportahan ang mga gastusing medikal, kabayaran sa kapansanan, at kabayaran sa naulilang pamilya na natamo dahil sa mga aksidente o sakit sa trabaho.

 • Pagiging karapat-dapat: Lahat ng manggagawa ← ay dapat na awtomatikong nakatala anuman ang uri ng trabaho o oras ng pagtatrabaho.

 • Mga premium ng insurance: Buong responsibilidad ng employer ← Hindi nagbabayad ang mga empleyado ng mga premium ng insurance.

 • Mga Benepisyo: Tulong sa mga gastos sa paggamot para sa mga pinsala at sakit na nauugnay sa trabaho. Ang kompensasyon ay binabayaran kung sakaling may kapansanan, at ang kabayaran sa mga nakaligtas ay binabayaran sa kaso ng kamatayan.

 ※ Mga espesyal na usapin tungkol sa mga dayuhang manggagawa

 - Mga paghihigpit sa mga benepisyo ng insurance: Depende sa uri ng trabaho at status ng paninirahan, ang mga benepisyo ng ilang insurance (lalo na ang insurance sa trabaho) ay maaaring limitado.

 - Kasunduan sa social security sa sariling bansa: Kung mayroong kasunduan sa social security sa pagitan ng Korea at ng bansang pinagmulan ng dayuhang manggagawa,

 Maaaring isaayos ang pagpapatala sa pambansang pensiyon o segurong pangkalusugan at pagtanggap ng refund.

 - Pagpaparehistro at pamamahala: Kapag natanggap mo ang iyong alien registration card, ang iyong subscription sa apat na pangunahing patakaran sa insurance ay sistematikong pamamahalaan.

★ Pamamaraan para sa pag-sign up para sa 4 na pangunahing patakaran sa seguro

 • Pinoproseso ng kumpanya: Sa karamihan ng mga kaso, hinihiling ng mga employer ang mga empleyado na mag-sign up para sa apat na pangunahing patakaran sa seguro.

 • Direktang subscription: Kung ikaw ay self-employed o walang kita, maaari kang mag-apply para sa national pension at health insurance.

 • Upang mapanatili ang isang matatag na buhay habang nagtatrabaho sa Korea, ang pag-sign up para sa apat na pangunahing patakaran sa seguro ay mahalaga.

✓ Mga kaugnay na organisasyon: Employer / Korea Workers’ Compensation and Welfare Service / National Pension Service
`,

    uz: `
1. Milliy pensiya

 • Maqsad: Pensiyada barqaror hayotni ta'minlash, oylik jamg'armalarni yig'ish va pensiya to'lash.

 • Muvofiqlik: 18 yoshdan 59 yoshgacha bo'lgan barcha ishchilar va biznes egalari.

 ※ Chet elliklar Koreyada ishlayotgan bo'lsa, milliy pensiyaga ham obuna bo'lishlari kerak.

 • Sug'urta mukofoti yuki

 Ishchilar - oylik daromadning **4,5%** to'lash.

 Ish beruvchi - xodimning sug'urta mukofotiga teng qo'shimcha **4,5%** to'laydi.

 ※ Chet elliklar uchun eslatma: Agar chet ellik ishchi o'z mamlakatiga qaytsa, uning hissasi bir yo'la qaytarilishi mumkin.

 ↑ Ko'rib chiqilayotgan davlat bilan o'zaro kelishuv mavjud bo'lgandagina foydalanish mumkin

2. Milliy sog'liq sug'urtasi

 • Maqsad: kasallik yoki baxtsiz hodisa tufayli tibbiy xarajatlar yukini kamaytirish.

 • Obuna bo'lish huquqi: Barcha chet ellik ishchilar, agar ular mamlakatga kirgandan keyin 6 oydan ortiq qolsalar, obuna bo'lishlari shart;

 ↑ Ish joyingiz turiga qarab, siz kompaniya tomonidan avtomatik ravishda ro'yxatdan o'tishingiz yoki shaxsan ro'yxatdan o'tishingiz kerak.

 • Sug'urta mukofoti yuki

 Ishchilar - oylik daromadning **3,675%** to'lash.

 Ish beruvchi - xodimning mukofotiga teng qo'shimcha **3,675%** to'laydi.

 • Imtiyozlar: Kasalxonalar, dorixonalar, stomatologlar va hokazolarda tibbiy xizmatlar olishda sug‘urta imtiyozlari qo‘llaniladi va xorijliklarga koreyslar kabi tibbiy imtiyozlar beriladi.

3. Mehnatni sug'urtalash

 • Maqsad: Ishsizlik holatida yashashni ta'minlash va qayta ishga joylashtirish uchun ta'lim va o'qitish.

 • Maqsadli auditoriya: Ko'pchilik ishchilar, shu jumladan to'liq kunlik ishchilar va shartnoma ishchilari.

 ↑ Yarim kunlik ishchilar (haftasiga 15 soatdan kam) va ayrim maxsus kasblar aʼzolikdan chiqarib tashlanadi.

 • Sug'urta mukofoti yuki

 Ishchilar: oylik daromadning **0,9%** to'lash.

 Ish beruvchi: xodimlar daromadining 0,9% + qo'shimcha haq ← Kompaniya hajmi va bandlik turiga qarab o'zgaradi.

 • Chet ellik imtiyozlar: Aksariyat chet ellik ishchilar ishsizlik nafaqalari va ish bilan ta'minlash sug'urtasi nafaqalarini olishlari mumkin.

 ※ Ishga joylashish uchun ruxsatnoma tizimi (E-9) bo'yicha ishlaydigan chet ellik ishchilar ishsizlik nafaqasini olish huquqiga ega emaslar.

4. Ishchilarning tovon sug'urtasi

 • Maqsad: Ishdagi baxtsiz hodisalar yoki kasalliklar tufayli tibbiy xarajatlar, nogironlik kompensatsiyasi va boquvchisini yo'qotgan oilaga kompensatsiya to'lash.

 • Muvofiqlik: barcha ishchilar ← ish turi yoki ish vaqtidan qat'iy nazar avtomatik ravishda ro'yxatga olinishi kerak.

 • Sug'urta mukofotlari: Ish beruvchining to'liq javobgarligi ← Xodimlar sug'urta mukofotlarini to'lamaydilar.

 • Imtiyozlar: ish bilan bog'liq jarohatlar va kasalliklarni davolash xarajatlariga yordam. Nogironlik holatida kompensatsiya to'lanadi, vafot etgan taqdirda esa tirik qolganlarga kompensatsiya to'lanadi.

 ※ Chet ellik ishchilarga oid maxsus masalalar

 - Sug'urta imtiyozlari bo'yicha cheklovlar: bandlik turiga va yashash joyiga qarab, ba'zi sug'urta (ayniqsa, mehnat sug'urtasi) imtiyozlari cheklangan bo'lishi mumkin.

 - vatan bilan ijtimoiy sug'urta shartnomasi: Koreya va chet ellik ishchi vatan o'rtasida ijtimoiy ta'minot shartnomasi mavjud bo'lsa,

 Milliy pensiya yoki sog'liq sug'urtasiga ro'yxatdan o'tish va to'lovni qaytarib olish sozlanishi mumkin.

 - Ro'yxatdan o'tish va boshqarish: Chet ellik ro'yxatga olish kartangizni olganingizdan so'ng, to'rtta asosiy sug'urta polisiga obuna bo'lishingiz tizimli ravishda boshqariladi.

★ 4 ta asosiy sug'urta polisiga ro'yxatdan o'tish tartibi

 • Kompaniya tomonidan qayta ishlanadi: Aksariyat hollarda ish beruvchilar xodimlardan to'rtta asosiy sug'urta polisiga ro'yxatdan o'tishlarini talab qiladi.

 • To'g'ridan-to'g'ri obuna: Agar siz yakka tartibdagi tadbirkor bo'lsangiz yoki daromadingiz bo'lmasa, davlat pensiya va tibbiy sug'urtaga o'zingiz murojaat qilishingiz mumkin.

 • Koreyada ishlash vaqtida barqaror hayotni saqlab qolish uchun to'rtta asosiy sug'urta polisiga ro'yxatdan o'tish zarur.

✓ Tegishli tashkilotlar: Ish beruvchi / Koreya ishchilariga tovon va ijtimoiy taʼminot xizmati / Milliy pensiya xizmati
`,
  },

  "Labor Law": {
    ko: `
★ 한국에 사는 외국인 근로자들은 한국인 근로자와 동일한 노동법의 보호를 받습니다. 

★ 노동법에 관한 더 많은 정보는 고용노동부(http://www.moel.go.kr)에서 얻을 수 있습니다.
          
    1. 근로시간

      • 법정근로시간은 휴식시간을 제외한 하루 8시간, 일주일 총 40시간입니다.

      • 산후 1년이 경과하지 않은 여성은 하루 2시간, 1주간 6시간, 1년 150시간을 넘는 연장근무를 할 수 없으며, 
      
          임신 중인 여성 근로자는 연장근무를 할 수 없습니다.

      • 18세 이상의 여성에게 야간근로(22시~익일 6시), 휴일근무를 시키는 경우 근로자의 동의가 필요합니다.

      • 연장근무, 야간근로, 휴일근로에 대해서는 각 통상 임금의 50%를 가산하여 지급합니다.

      • 4시간 근로 시 30분, 8시간 근로 시 1시간의 휴식시간이 부여됩니다.

    2. 임금

      • 2024년 최저임금은 9,860원(시급)입니다.

      • 고용주는 노동자의 임금을 수표나 현금으로 지급해야 합니다. 
      
      • 노동자가 지급일자 전 미리 임금지급을 청구하는 경우 이미 노동한 임금에 대해서 지급해야 합니다.

      • 미수령 임금은 지방노동관서에 고소하거나 민사절차를 통해 해결할 수 있습니다.

    3. 휴가

      • 1년 이상 근속, 80% 이상 출근한 노동자에게는 15일의 유급 휴가가 부여됩니다.

      • 근로 연수가 1년 미만인 근로자에게는 1달간 개근 시 1일의 유급 휴가가 부여됩니다.

      • 업무상의 부상, 병으로 인한 휴업, 산전·산후휴가, 유산·사상휴가로 쉰 기간은 출근으로 인정됩니다.
      
      • 여성 노동자는 월 1일, 생리휴가(무급)를 청구할 수 있습니다.
`,
    en: `
★ Foreign workers living in Korea are protected by the same labor laws as Korean workers.

★ More information about labor laws can be obtained from the Ministry of Employment and Labor (http://www.moel.go.kr).

1. Working Hours

• Statutory working hours are 8 hours per day, 40 hours per week, excluding rest time.

• Women who have not been pregnant for more than 1 year cannot work overtime exceeding 2 hours per day, 6 hours per week, and 150 hours per year,

and pregnant female workers cannot work overtime.

• When having women aged 18 or older work night work (22:00 to 6:00 the next day) or work on holidays, the worker's consent is required.

• Overtime, night work, and holiday work are paid with an additional 50% of the regular wage.

• A 30-minute break is given for every 4 hours of work, and a 1-hour break is given for every 8 hours of work.

2. Wages

• The minimum wage in 2024 is 9,860 won (hourly wage).

• Employers must pay workers' wages by check or cash.

• If workers request payment of wages in advance before the payment date, they must pay wages already worked.

• Unpaid wages can be resolved by filing a complaint with the local labor office or through civil procedures.

3. Vacations

• Workers who have worked for more than one year and have attended more than 80% of the work are granted 15 days of paid vacation.

• Workers who have worked for less than one year are granted 1 day of paid vacation for every month of attendance.

• Periods of absence due to work-related injury, illness, prenatal/postnatal leave, miscarriage/accident leave are recognized as work.

• Female workers can request menstrual leave (unpaid) on the 1st day of each month.
`,

    hi: `
★ कोरिया में रहने वाले विदेशी श्रमिकों को कोरियाई श्रमिकों के समान ही श्रम कानूनों द्वारा संरक्षित किया जाता है।

★ श्रम कानूनों पर अधिक जानकारी रोजगार एवं श्रम मंत्रालय (http://www.moel.go.kr) से प्राप्त की जा सकती है।

 1. काम के घंटे

 • कानूनी कामकाजी घंटे प्रति दिन 8 घंटे हैं, ब्रेक के समय को छोड़कर, सप्ताह में कुल 40 घंटे।

 • जिन महिलाओं को प्रसव के बाद एक वर्ष से कम समय हो गया है, वे प्रति दिन 2 घंटे, प्रति सप्ताह 6 घंटे या प्रति वर्ष 150 घंटे से अधिक ओवरटाइम काम नहीं कर सकती हैं।

 गर्भवती महिला कर्मचारी ओवरटाइम काम नहीं कर सकतीं।

 • जब 18 वर्ष से अधिक उम्र की किसी महिला को रात में काम करने (अगले दिन 22:00 - 6:00 बजे) या छुट्टियों पर काम करने की आवश्यकता होती है, तो कार्यकर्ता की सहमति आवश्यक होती है।

 • ओवरटाइम काम, रात के काम और छुट्टी के काम के लिए नियमित वेतन का अतिरिक्त 50% भुगतान किया जाता है।

 • हर 4 घंटे के काम के लिए 30 मिनट का ब्रेक दिया जाता है और हर 8 घंटे के काम के लिए 1 घंटे का ब्रेक दिया जाता है।

 2. राजा

 • 2024 में न्यूनतम वेतन 9,860 वॉन (प्रति घंटा वेतन) है।

 • नियोक्ताओं को श्रमिकों के वेतन का भुगतान चेक या नकद द्वारा करना होगा।

 • यदि कोई श्रमिक भुगतान तिथि से पहले मजदूरी के भुगतान का अनुरोध करता है, तो उसे पहले से ही काम की गई मजदूरी का भुगतान किया जाना चाहिए।

 • स्थानीय श्रम कार्यालय में शिकायत दर्ज करके या नागरिक प्रक्रियाओं के माध्यम से असंगृहीत मजदूरी का समाधान किया जा सकता है।

 3. छुट्टियाँ

 • एक वर्ष से अधिक की सेवा और 80% से अधिक उपस्थिति वाले कर्मचारी 15 दिनों की सवैतनिक छुट्टी के हकदार हैं।

 • एक वर्ष से कम कार्य अनुभव वाले कर्मचारियों को काम के प्रत्येक पूरे महीने के लिए एक दिन का सवैतनिक अवकाश दिया जाता है।

 • काम से संबंधित चोट, बीमारी, प्रसवपूर्व/प्रसवोत्तर छुट्टी, गर्भपात/आकस्मिक छुट्टी आदि के कारण छुट्टी की अवधि को काम के रूप में मान्यता दी जाती है।

 • महिला कर्मचारी प्रत्येक माह के पहले दिन मासिक धर्म अवकाश (अवैतनिक) का दावा कर सकती हैं।
 `,

    vi: `
★ Người lao động nước ngoài sống ở Hàn Quốc được bảo vệ bởi luật lao động giống như người lao động Hàn Quốc.

★ Thông tin thêm về luật lao động có thể được lấy từ Bộ Việc làm và Lao động (http://www.moel.go.kr).

 1. Giờ làm việc

 • Thời gian làm việc hợp pháp là 8 giờ một ngày, không kể thời gian nghỉ giải lao, tổng cộng là 40 giờ một tuần.

 • Phụ nữ sau sinh dưới một năm không được làm thêm giờ quá 2 giờ/ngày, 6 giờ/tuần hoặc 150 giờ/năm.

 Lao động nữ mang thai không được làm thêm giờ.

 • Khi yêu cầu phụ nữ trên 18 tuổi làm việc vào ban đêm (22h - 6h hôm sau) hoặc làm việc vào ngày lễ thì phải được sự đồng ý của người lao động.

 • Trả thêm 50% tiền lương thường xuyên cho việc làm thêm giờ, làm việc ban đêm và làm việc vào ngày lễ.

 • Cứ 4 giờ làm việc thì được nghỉ 30 phút và cứ 8 giờ làm việc được nghỉ 1 giờ.

 2. Vua

 • Mức lương tối thiểu năm 2024 là 9.860 won (lương theo giờ).

 • Người sử dụng lao động phải trả lương cho người lao động bằng séc hoặc tiền mặt.

 • Nếu người lao động yêu cầu trả lương trước ngày trả lương thì người đó phải được trả số tiền lương đã làm việc.

 • Tiền lương không được thu có thể được giải quyết bằng cách nộp đơn khiếu nại lên cơ quan lao động địa phương hoặc thông qua thủ tục dân sự.

 3. Kỳ nghỉ

 • Người lao động có hơn một năm làm việc và đi làm trên 80% được hưởng 15 ngày nghỉ phép có lương.

 • Người lao động có kinh nghiệm làm việc dưới một năm được nghỉ phép có hưởng lương một ngày cho mỗi tháng làm việc đầy đủ.

 • Khoảng thời gian nghỉ việc do tai nạn lao động, bệnh tật, nghỉ thai sản/sau sinh, sẩy thai/nghỉ phép do tai nạn, v.v. được coi là công việc.

 • Lao động nữ có thể xin nghỉ kinh nguyệt (không lương) vào ngày đầu tiên hàng tháng.
 `,

    ru: `
★ Иностранные рабочие, проживающие в Корее, защищены тем же трудовым законодательством, что и корейские рабочие.

★ Дополнительную информацию о трудовом законодательстве можно получить в Министерстве занятости и труда (http://www.moel.go.kr).

 1. Рабочее время

 • Законное рабочее время составляет 8 часов в день, исключая перерывы, всего 40 часов в неделю.

 • Женщины, прошедшие после родов менее одного года, не могут работать сверхурочно, превышая 2 часа в день, 6 часов в неделю или 150 часов в год.

 Беременные работницы не могут работать сверхурочно.

 • При привлечении женщины старше 18 лет к работе в ночное время (с 22:00 до 6:00 следующего дня) или работе в праздничные дни необходимо согласие работника.

 • За сверхурочную работу, работу в ночное время и работу в праздничные дни дополнительно выплачивается 50% стандартной заработной платы.

 • Перерыв продолжительностью 30 минут предоставляется на каждые 4 часа работы, перерыв на 1 час – на каждые 8 ​​часов работы.

 2. Король

 • Минимальная заработная плата в 2024 году составит 9 860 вон (почасовая оплата).

 • Работодатели должны выплачивать зарплату работникам чеками или наличными.

 • Если работник требует выплаты заработной платы до даты выплаты, ему или ей должна быть выплачена уже отработанная заработная плата.

 • Проблема невыплаты заработной платы может быть решена путем подачи жалобы в местное бюро труда или в гражданском порядке.

 3. Отпуск

 • Работники со стажем работы более одного года и посещаемостью более 80% имеют право на 15 дней оплачиваемого отпуска.

 • Работникам со стажем работы менее одного года предоставляется один день оплачиваемого отпуска за каждый полный месяц работы.

 • Работой признается период отпуска по причине производственной травмы, болезни, отпуска по беременности и родам, отпуска по причине выкидыша/случайного случая и т.п.

 • Работницы-женщины могут претендовать на менструальный отпуск (неоплачиваемый) в первый день каждого месяца.
 `,

    zh: `
★ 居住在韩国的外国劳动者与韩国劳动者受到同样的劳动法的保护。

★ 有关劳动法的更多信息，请访问就业劳动部(http://www.moel.go.kr)。

 1. 工作时间

 • 法定工作时间为每天 8 小时，不包括休息时间，每周总共 40 小时。

 • 产后不满一年的女性每天加班时间不得超过2 小时，每周加班时间不得超过6 小时，每年加班时间不得超过150 小时。

 怀孕女工不能加班。

 • 要求年满18 岁的女性上夜班（22:00 - 次日6:00）或节假日工作时，须征得工人同意。

 • 对于加班、夜班和节假日加班，额外支付正常工资的50%。

 • 每工作4小时休息30分钟，每工作8小时休息1小时。

 2. 国王

 • 2024 年最低工资为9,860 韩元（小时工资）。

 • 雇主必须通过支票或现金支付工人的工资。

 • 如果工人要求在付款日期之前支付工资，则必须向他或她支付已经工作的工资。

 • 拖欠工资可以通过向当地劳动部门投诉或通过民事程序解决。

 3. 假期

 • 工龄超过一年且出勤率超过80%的员工有权享受15天带薪休假。

 • 工作经验不足一年的员工每满工作一个月可享受一天带薪休假。

 • 因工伤、患病、产前/产后假、流产/意外事假等原因的休息时间视为工作。

 • 女工可以在每个月的第一天申请经假（无薪）。
 `,

    ja: `
★韓国に住む外国人労働者は、韓国人労働者と同じ労働法の保護を受けます。

★労働法に関する詳細情報は、雇用労働部（http://www.moel.go.kr）から入手できます。

 1.労働時間

 •法定労働時間は、休憩時間を除く1日8時間、週に合計40時間です。

 •産後1年が経過していない女性は、1日2時間、1週間6時間、1年150時間を超える延長勤務をすることはできません。

 妊娠中の女性労働者は延長勤務をすることはできません。

 • 18歳以上の女性に夜間勤労（22時～翌6時）、休日勤務をさせる場合、労働者の同意が必要です。

 • 延長勤務、夜間勤労、休日勤労については、各通常賃金の50％を加算して支給します。

 • 4時間労働時は30分、8時間労働時は1時間の休憩時間が与えられます。

 2. 賃金

 •2024年の最低賃金は9,860ウォン（時給）です。

 •雇用主は労働者の賃金を小切手または現金で支払わなければなりません。

 •労働者が支払日前に事前に賃金を支払う場合は、すでに労働している賃金について支払う必要があります。

 •未受給賃金は、地方労働官署に訴えるか、民事手続きを通じて解決することができます。

 3. 休暇

 •1年以上勤続、80％以上出勤した労働者には15日の有給休暇が与えられます。

 • 勤労年数が1年未満の労働者には、1ヶ月間開勤時に1日の有給休暇が与えられます。

 • 業務上の負傷、病気による休業、産前・産後休暇、遺産・思想休暇で休憩期間は出勤と認められます。

 •女性労働者は月1日、月経休暇（無給）を請求できます。
 `,

    th: `
★ แรงงานต่างชาติที่อาศัยอยู่ในเกาหลีได้รับการคุ้มครองโดยกฎหมายแรงงานเดียวกันกับแรงงานชาวเกาหลี

★ ข้อมูลเพิ่มเติมเกี่ยวกับกฎหมายแรงงานสามารถรับได้จากกระทรวงการจ้างงานและแรงงาน (http://www.moel.go.kr)

 1. ชั่วโมงการทำงาน

 • ชั่วโมงการทำงานตามกฎหมายคือ 8 ชั่วโมงต่อวัน ไม่รวมเวลาพัก รวมเป็น 40 ชั่วโมงต่อสัปดาห์

 • สตรีที่มีอายุหลังคลอดน้อยกว่าหนึ่งปีไม่สามารถทำงานล่วงเวลาเกิน 2 ชั่วโมงต่อวัน 6 ชั่วโมงต่อสัปดาห์ หรือ 150 ชั่วโมงต่อปี

 คนงานหญิงมีครรภ์ไม่สามารถทำงานล่วงเวลาได้

 • เมื่อกำหนดให้ผู้หญิงที่มีอายุ 18 ปีขึ้นไปทำงานในเวลากลางคืน (22.00 - 06.00 น. ของวันถัดไป) หรือทำงานในวันหยุด ต้องได้รับความยินยอมจากคนงาน

 • จ่ายเพิ่มอีก 50% ของค่าจ้างปกติสำหรับการทำงานล่วงเวลา งานกลางคืน และงานวันหยุด

 • มีเวลาพัก 30 นาทีสำหรับการทำงานทุกๆ 4 ชั่วโมง และให้เวลาพัก 1 ชั่วโมงสำหรับการทำงานทุกๆ 8 ชั่วโมง

 2. คิง

 • ค่าแรงขั้นต่ำในปี 2024 คือ 9,860 วอน (ค่าจ้างรายชั่วโมง)

 • นายจ้างต้องจ่ายค่าจ้างคนงานด้วยเช็คหรือเงินสด

 • หากคนงานร้องขอการจ่ายค่าจ้างล่วงหน้าก่อนวันที่จ่ายเงิน เขาหรือเธอจะต้องได้รับค่าจ้างตามค่าจ้างที่ได้ทำงานไปแล้ว

 • ค่าจ้างที่ค้างชำระสามารถแก้ไขได้โดยการยื่นเรื่องร้องเรียนต่อสำนักงานแรงงานในพื้นที่หรือผ่านกระบวนการทางแพ่ง

 3. วันหยุด

 • คนงานที่ทำงานมากกว่าหนึ่งปีและมาทำงานมากกว่า 80% มีสิทธิลาหยุดได้ 15 วัน โดยได้รับค่าจ้าง

 • พนักงานที่มีประสบการณ์การทำงานน้อยกว่าหนึ่งปีจะได้รับวันลาโดยได้รับค่าจ้างหนึ่งวันต่อการทำงานเต็มเดือน

 • ระยะเวลาหยุดงานเนื่องจากการบาดเจ็บจากการทำงาน การเจ็บป่วย การลาก่อน/หลังคลอด การแท้งบุตร/การลาโดยอุบัติเหตุ ฯลฯ ถือเป็นงาน

 • ลูกจ้างหญิงสามารถขอลาประจำเดือนได้ (ไม่ได้รับค่าจ้าง) ทุกวันแรกของเดือน
 `,

    tl: `
★ Ang mga dayuhang manggagawa na naninirahan sa Korea ay protektado ng parehong mga batas sa paggawa gaya ng mga Koreanong manggagawa.

★ Higit pang impormasyon sa mga batas sa paggawa ay maaaring makuha mula sa Ministry of Employment and Labor (http://www.moel.go.kr).

 1. Oras ng trabaho

 • Ang legal na oras ng pagtatrabaho ay 8 oras sa isang araw, hindi kasama ang mga oras ng pahinga, para sa kabuuang 40 oras sa isang linggo.

 • Ang mga babae na wala pang isang taong postpartum ay hindi maaaring magtrabaho ng overtime nang higit sa 2 oras bawat araw, 6 na oras bawat linggo, o 150 oras bawat taon.

 Ang mga buntis na babaeng manggagawa ay hindi maaaring mag-overtime.

 • Kapag hinihiling ang isang babae na higit sa 18 taong gulang na magtrabaho sa gabi (22:00 - 6:00 sa susunod na araw) o magtrabaho sa mga holiday, ang pahintulot ng manggagawa ay kinakailangan.

 • Ang karagdagang 50% ng regular na sahod ay binabayaran para sa overtime na trabaho, trabaho sa gabi, at holiday na trabaho.

 • Ang 30 minutong pahinga ay ibinibigay para sa bawat 4 na oras ng trabaho, at 1 oras na pahinga ay ibinibigay para sa bawat 8 oras na trabaho.

 2. Hari

 • Ang minimum na sahod sa 2024 ay 9,860 won (hourly wage).

 • Dapat bayaran ng mga employer ang sahod ng mga manggagawa sa pamamagitan ng tseke o cash.

 • Kung ang isang manggagawa ay humiling ng pagbabayad ng sahod bago ang petsa ng pagbabayad, siya ay dapat bayaran para sa sahod na nagtrabaho na.

 • Ang hindi nakolektang sahod ay maaaring lutasin sa pamamagitan ng paghahain ng reklamo sa lokal na tanggapan ng paggawa o sa pamamagitan ng mga pamamaraang sibil.

 3. Bakasyon

 • Ang mga manggagawang may higit sa isang taon ng serbisyo at higit sa 80% na pagdalo ay may karapatan sa 15 araw na bayad na bakasyon.

 • Ang mga empleyadong wala pang isang taon na karanasan sa pagtatrabaho ay binibigyan ng isang araw ng bayad na bakasyon para sa bawat buong buwan ng trabaho.

 • Ang panahon ng pahinga dahil sa pinsalang nauugnay sa trabaho, karamdaman, prenatal/postnatal leave, miscarriage/accidental leave, atbp. ay kinikilala bilang trabaho.

 • Ang mga babaeng manggagawa ay maaaring mag-claim ng menstrual leave (hindi bayad) sa unang araw ng bawat buwan.
 `,

    uz: `
★ Koreyada yashovchi chet ellik ishchilar koreys ishchilari bilan bir xil mehnat qonunlari bilan himoyalangan.

★ Mehnat qonunlari bo'yicha qo'shimcha ma'lumotni Bandlik va mehnat vazirligidan (http://www.moel.go.kr) olishingiz mumkin.

 1. Ish vaqti

 • Qonuniy ish vaqti kuniga 8 soat, tanaffusdan tashqari, haftasiga jami 40 soat.

 • Tug'ilgandan keyin bir yildan kam ishlagan ayollar kuniga 2 soatdan, haftada 6 soatdan yoki yiliga 150 soatdan ortiq ishlay olmaydi.

 Homilador ayollar ortiqcha ishlamaydi.

 • 18 yoshdan oshgan ayolni tungi vaqtda (ertasi kuni 22:00 dan 6:00 gacha) yoki bayram kunlarida ishlashni talab qilganda ishchining roziligi talab qilinadi.

 • Ish vaqtidan tashqari ishlar, tungi ishlar va bayramlar uchun odatdagi ish haqining 50% qo'shimcha to'lanadi.

 • Har 4 soatlik ish uchun 30 daqiqalik, har 8 soatlik ish uchun esa 1 soatlik tanaffus beriladi.

 2. Qirol

 • 2024-yilda eng kam ish haqi 9860 von (soatlik ish haqi).

 • Ish beruvchilar ishchilarning ish haqini chek yoki naqd pul bilan to'lashlari shart.

 • Agar ishchi ish haqini to'lash sanasidan oldin to'lashni talab qilsa, u allaqachon ishlagan ish haqi uchun to'lanishi kerak.

 • Undirilmagan ish haqini mahalliy mehnat idorasiga shikoyat qilish yoki fuqarolik protsessual yo'li bilan hal qilish mumkin.

 3. Dam olish

 • Bir yildan ortiq ish stajiga ega va 80% dan ortiq davomatga ega bo'lgan ishchilar 15 kunlik haq to'lanadigan ta'til olish huquqiga ega.

 • Bir yildan kam ish stajiga ega bo‘lgan xodimlarga har bir to‘liq ish oyi uchun bir kunlik haq to‘lanadigan ta’til beriladi.

 • Ish bilan bog‘liq jarohatlar, kasallik, tug‘ruqdan oldingi/tug‘ruqdan keyingi ta’til, homilaning tushishi/tasodifiy ta’til va hokazolar bilan bog‘liq bo‘lgan ta’til davri mehnat deb e’tirof etiladi.

 • Ayol ishchilar har oyning birinchi kunida hayz ta'tilini (ish haqi to'lanmagan) olishlari mumkin.
 `,
  },
};

//--------------------------- Chat --------------------//
// Add event listeners to quick reply buttons
document.querySelectorAll(".quick-reply").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic");
    const userMessage = button.textContent;
    const botReply = responses[topic][currentLanguage];

    // Add the user's message and scroll to it
    const userMessageElement = addMessage(userMessage, "user");
    userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

    // Add the bot's response after a slight delay (for a real-time conversation feel)
    setTimeout(() => {
      // Create a container for the bot message
      const botMessageContainer = document.createElement("div");
      botMessageContainer.classList.add("bot-message-container");

      // Create a button for speech output
      const voiceButton = document.createElement("button");
      voiceButton.textContent = "🎧"; // Initial icon
      voiceButton.className = "audio-button";

      // Manage speaking and stopping states
      let isSpeaking = false;

      // Event listener for the voice button
      voiceButton.addEventListener("click", () => {
        if (isSpeaking) {
          // Stop speech
          synth.cancel();
          isSpeaking = false;
          voiceButton.textContent = "🎧"; // Reset button icon
        } else {
          // Start speech
          synth.cancel(); // Stop any previous speech
          const utterance = createUtterance(botReply, currentLanguage); // Use the botReply text
          synth.speak(utterance); // Start speaking
          isSpeaking = true;
          voiceButton.textContent = "⬜️"; // Change button icon to "stop"

          // Reset state after speech ends
          utterance.onend = () => {
            isSpeaking = false;
            voiceButton.textContent = "🎧"; // Reset icon after speech ends
          };
        }
      });

      function createUtterance(text, language) { // Function for creating speech utterance
        const voices = synth.getVoices();

        // Substitute unsupported languages with default options
        if (language === "tl") {
          language = "en"; // Substitute Filipino with English
        } else if (language === "uz") {
          language = "ru"; // Substitute Uzbek with Russian
        }

        // Find the matching voice for the language
        const voice = voices.find((v) => v.lang.startsWith(language)) || null;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = voice ? voice.lang : language; // Set language or use the default
        utterance.voice = voice;
        return utterance;
      }

      // Generate the bot's message
      const botMessageElement = addMessage(botReply, "bot");

      // Arrange the bot message and button in a Flexbox layout
      botMessageContainer.appendChild(botMessageElement); // Add message (left)
      botMessageContainer.appendChild(voiceButton); // Add button (right)

      // Add the container to the chatbox
      const chatbox = document.getElementById("chatbox");
      chatbox.appendChild(botMessageContainer);

      // Scroll to the bot message
      botMessageContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1000); // Delay of 1 second
  });
});

// Function to add messages to the chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;

  chatbox.appendChild(messageElement);

  return messageElement; // Return the newly added message element
}

// Event listeners for sending messages
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to send messages
function sendMessage() { //================================================================================================================================
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim(); // Get user input text

  if (userMessage === "") return; // Prevent empty input

  console.log("User Message:", userMessage);

  const userMessageElement = addMessage(userMessage, "user");

  // Display the user's message
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // Generate the bot's response via API
  getBotResponse(userMessage).then((botMessage) => {
    console.log("Bot Message:", botMessage);
    // Add the bot's message after a slight delay
    setTimeout(() => {
      const botMessageElement = addMessage(botMessage, "bot");

      // Create a button for speech output
      const voiceButton = document.createElement("button");
      voiceButton.textContent = "🎧"; // Initial icon
      voiceButton.className = "audio-button";

      // Manage speaking and stopping states
      let isSpeaking = false; // Function for setting voice by language
      function createUtterance(text, language) { // Utterance creation for API responses
        const voices = synth.getVoices();

        // Substitute unsupported languages with default options
        if (language === "tl") {
          language = "en"; // Substitute Filipino with English
        } else if (language === "uz") {
          language = "ru"; // Substitute Uzbek with Russian
        }

        // Find the matching voice for the language
        const voice = voices.find((v) => v.lang.startsWith(language)) || null;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = voice ? voice.lang : language; // Set language or use the default
        utterance.voice = voice;
        return utterance;
      }

      // Event listener for the voice button
      voiceButton.addEventListener("click", () => {
        if (isSpeaking) {
          // Stop speech
          synth.cancel();
          isSpeaking = false;
          voiceButton.textContent = "🎧"; // Reset button icon
        } else {
          // Start speech
          synth.cancel(); // Stop any previous speech

          const utterance = createUtterance(
            botMessage,
            currentLanguage // Current set language
          );
          synth.speak(utterance); // Start speaking
          isSpeaking = true;
          voiceButton.textContent = "⬜️"; // Change button icon to "stop"

          // Reset state after speech ends
          utterance.onend = () => {
            isSpeaking = false;
            voiceButton.textContent = "🎧"; // Reset icon after speech ends
          };
        }
      });

      // Create a container for the bot message and button
      const botMessageContainer = document.createElement("div");
      botMessageContainer.classList.add("bot-message-container");
      botMessageContainer.appendChild(botMessageElement);
      botMessageContainer.appendChild(voiceButton); // Add button to the right

      // Add the container to the chatbox
      const chatbox = document.getElementById("chatbox");
      chatbox.appendChild(botMessageContainer);

      // Scroll to the bot message
      botMessageContainer.scrollIntoView({ behavior: "smooth", block: "end" });
    }); // Delay of 0.5 seconds
  });

  inputField.value = ""; // Clear the input field
}

// ------------------------ API Calls --------------------------//
// Function to call OpenAI API for responses
async function getBotResponse(userMessage) {
  const response = await fetch(
    `https://lawbot.ddns.net/ask/immigration?question=${encodeURIComponent(
      userMessage
    )}`
  );
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Return the answer or reply from the API response
    return (
      data.answer || data.reply || "Sorry, I couldn't generate a response."
    );
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "There was an issue communicating with the server.";
  }
}

// Function to detect language via REST API //================================================================================================================================
async function getLanguage(message) {
  const response = await fetch(
    `https://lawbot.ddns.net/ask/lang?message=${encodeURIComponent(message)}`
  );
  const data = await response.json();
  return data.language || data.reply || "Sorry, I couldn't detect the language.";
}

// ------------------- Speech Recognition -----------------//
if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
  alert("This browser does not support speech recognition.");
}

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;

  // Display the user's message on the screen
  addMessage(transcript, "user");

  // Add scroll effect to the user's message
  const userMessageElement = document.querySelector(
    ".chat-message.user:last-child"
  );
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // 1) Detect the language
  const detectedLanguage = await getLanguage(transcript);

  // Set the speech recognition language
  recognition.lang = detectedLanguage;

  // 2) Generate bot response
  const botMessage = await getBotResponse(transcript);

  // 3) Display bot response + add a voice button
  addBotMessageWithVoice(botMessage, detectedLanguage);
};


recognition.onerror = (event) => {
  console.error("Voice recognition error:", event.error);
  if (event.error === "no-speech") {
    alert("The voice was not recognized. Please try again.");
  }
};


//-------------------- Execute Voice Recognition Once and Exit --------------------//
document.getElementById("voiceButton").addEventListener("click", () => {
  recognition.start();
});

async function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim(); // Get user input text

  if (userMessage === "") return; // Prevent empty input

  console.log("User Message:", userMessage);

  // Detect the language of the input text via REST API
  const detectedLanguage = await getLanguage(userMessage); //================================================================================================================================

  const userMessageElement = addMessage(userMessage, "user");

  // Display the user's message on the screen
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // Generate bot response via API
  getBotResponse(userMessage).then((botMessage) => {
    addBotMessageWithVoice(botMessage, detectedLanguage); //================================================================================================================================
  });

  inputField.value = ""; // Clear the input field
}

const synth = window.speechSynthesis; // Initialize SpeechSynthesis object================================================================================================================================

let voices = []; // Store the list of voices================================================================================================================================

function addBotMessageWithVoice(botMessage, detectedLanguage) {
  console.log("Bot Message:", botMessage);
  // Add bot's message after a slight delay
  setTimeout(() => {
    const botMessageElement = addMessage(botMessage, "bot");

    // Create a button for speech output
    const voiceButton = document.createElement("button");
    voiceButton.textContent = "🎧"; // Initial icon setting
    voiceButton.className = "audio-button";

    // Manage speaking and stopping states
    let isSpeaking = false;
    function createUtterance(text, language) { // createUtterance function (nested within addBotMessageWithVoice)
      console.log(language);
      // Preprocess language code (e.g., "english" -> "en")
      language = language.substring(0, 1); //================================================================================================================================

      voices = synth.getVoices(); // Retrieve available voices================================================================================================================================

      console.log(voices);
      // Force substitution for unsupported languages
      if (language === "tl") {
        language = "en"; // Substitute Filipino with English
      } else if (language === "uz") {
        language = "ru"; // Substitute Uzbek with Russian
      }
      // Find the voice that matches the substituted language code
      const voice = voices.find((v) => v.lang.startsWith(language)) || null;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice ? voice.lang : language; // Set the substituted language code
      utterance.voice = voice;
      return utterance;
    }

    // Event handler for the voice button (detects user interaction)
    voiceButton.addEventListener("click", () => {
      if (isSpeaking) {
        // Stop speech
        synth.cancel();
        isSpeaking = false;
        voiceButton.textContent = "🎧"; // Reset button icon to "🎧"
      } else {
        // Start speech
        synth.cancel(); // Stop any previously playing speech
        const utterance = createUtterance(botMessage, detectedLanguage); // Configure with the detected language
        synth.speak(utterance); // Start speaking
        isSpeaking = true;
        voiceButton.textContent = "⬜️"; // Change button icon to "⬜️"

        // Reset state when speech ends
        utterance.onend = () => {
          isSpeaking = false;
          voiceButton.textContent = "🎧"; // Reset icon after speech ends
        };
      }
    });

    // Create a container for bot message and button
    const botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("bot-message-container");
    botMessageContainer.appendChild(botMessageElement);
    botMessageContainer.appendChild(voiceButton); // Add button to the right

    // Add the container to the chatbox
    const chatbox = document.getElementById("chatbox");
    chatbox.appendChild(botMessageContainer);

    // Display the bot message on the screen
    botMessageContainer.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 500);
}

function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;
  const chatbox = document.getElementById("chatbox");
  chatbox.appendChild(messageElement);
  return messageElement;
}

//------------- Save Selected Conversations --------------//
const chatbox = document.getElementById("chatbox");
const logBtn = document.querySelector(".log-btn");
const inputContainer = document.querySelector(".input-container");
const mainContainer = document.querySelector(".main-container");
const choiceContainer = document.querySelector(".choice-container");

let selectedMessages = [];

// Event handler for message selection
function enableMessageSelection() {
  chatbox.addEventListener("click", messageSelectionHandler);
}

// Message selection handler function
function messageSelectionHandler(event) {
  if (event.target.classList.contains("chat-message")) {
    const msg = event.target;
    msg.classList.toggle("selected");

    const messageText = msg.textContent.trim();
    if (msg.classList.contains("selected")) {
      selectedMessages.push({
        text: messageText,
        sender: msg.classList.contains("user") ? "user" : "bot", // Add sender information
      });
    } else {
      selectedMessages = selectedMessages.filter(
        (message) => message.text !== messageText // Remove if deselected
      );
    }
  }
}

// Function to save selected messages
function saveMessages(title) {
  if (selectedMessages.length === 0) {
    alert("Please select the message you want to save.");
    return;
  }

  const savedMessages = selectedMessages.slice(); // Copy messages

  // Reset selected messages after saving
  selectedMessages = [];
  const allMessages = document.querySelectorAll(".chat-message");
  allMessages.forEach((msg) => msg.classList.remove("selected"));

  // Create a button for the saved title
  const createdButton = document.createElement("button");
  createdButton.textContent = title;
  createdButton.className = "generated-button";
  choiceContainer.appendChild(createdButton);

  // Display saved messages on button click
  createdButton.addEventListener("click", () => {
    displaySavedMessages(savedMessages);
  });
}

// Function to display saved messages
function displaySavedMessages(savedMessages) {
  // Remove any previously displayed messages
  const existingMessagesContainer = document.querySelector(
    ".saved-messages-container"
  );
  if (existingMessagesContainer) {
    existingMessagesContainer.remove();
  }

  // Create a new container
  const messagesContainer = document.createElement("div");
  messagesContainer.className = "chat-container";

  // Set height
  messagesContainer.style.height = "88vh"; // 80% of the screen height

  // Add LawBot logo
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.style.marginBottom = "30px";
  messagesContainer.appendChild(logoDiv);

  // Add close button
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn"; // Add CSS class
  closeButton.textContent = "🔙";
  messagesContainer.appendChild(closeButton);

  // Hide list button
  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // Hide list-btn when messagesContainer is displayed
  }

  // Create a new chat-box
  const chatBox = document.createElement("div");
  chatBox.className = "chat-box";
  chatBox.style.height = "69vh";

  // Add saved messages to the chat-box
  savedMessages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");

    // Apply user or bot style based on sender
    if (message.sender === "user") {
      messageDiv.classList.add("user");
    } else if (message.sender === "bot") {
      messageDiv.classList.add("bot");
    }

    messageDiv.textContent = message.text;
    chatBox.appendChild(messageDiv);
  });

  // Add chat-box to the chat-container
  messagesContainer.appendChild(chatBox);

  // Add message container to the screen
  mainContainer.appendChild(messagesContainer);

  // Define behavior for close button click
  closeButton.addEventListener("click", () => {
    // Reset to the state before log-btn was clicked
    inputContainer.style.display = "block"; // Show input container again
    messagesContainer.remove(); // Remove chat-container from the screen
    listBtn.style.display = "block"; // Show list-btn again
  });
}

// ------------------- Event for the "+" Button -------------//
logBtn.addEventListener("click", () => {
  inputContainer.style.display = "none"; // Hide input container

  // Remove existing log-container if it exists
  const existingLogContainer = document.querySelector(".log-container");
  if (existingLogContainer) {
    existingLogContainer.remove();
  }

  // Create a new log-container
  const logContainer = document.createElement("div");
  logContainer.className = "log-container";

  const instructionText = document.createElement("div");
  instructionText.className = "instruction-text";
  logContainer.appendChild(instructionText);

  // Add input field and confirm button
  const inputButtonContainer = document.createElement("div");
  inputButtonContainer.className = "input-button-container";

  const inputField2 = document.createElement("input");
  inputField2.type = "text";
  inputButtonContainer.appendChild(inputField2);

  const confirmBtn = document.createElement("button");
  inputButtonContainer.appendChild(confirmBtn);

  // Add 'closeButton'
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn";
  closeButton.textContent = "🔙";
  logContainer.appendChild(closeButton);

  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // Hide list-btn when messagesContainer is displayed
  }
  mainContainer.appendChild(logContainer);
  logContainer.appendChild(inputButtonContainer);

  updateLanguage(); // Update text according to the selected language

  // Close button click behavior
  closeButton.addEventListener("click", () => {
    logContainer.remove(); // Remove log-container from the screen
    inputContainer.style.display = "block"; // Show input container again
  });

  // Confirm button click to save messages with title
  confirmBtn.addEventListener("click", () => {
    const title = inputField2.value.trim(); // Get title from inputField2
    if (title) {
      // Save selected messages
      saveMessages(title);

      // After saving messages, show input container again
      logContainer.remove(); // Remove logContainer
      inputContainer.style.display = "block"; // Show input-container again
    } else {
      alert("No!");
    }
  });

  // Enable message selection (only when log-btn is clicked)
  enableMessageSelection();
});