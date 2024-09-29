# Filename: streamlit_app.py

import streamlit as st
import os

# Set page configuration
st.set_page_config(page_title="Seoul Science Park", layout="wide")

# The list of items and their names
fullOrder = [
    '0-0-31@수표', '0-0-1@혼천시계', '0-0-2@평면일구', '0-0-3@혼천의', '0-0-4@앙부일구', '0-0-5@인공위성지도', '0-0-6@대동여지전도', '0-0-7@동국여지지도', '0-0-8@천자총통', '0-0-9@황자총통', '0-0-10@장군총통', '0-0-11@철신포', '0-0-12@화전', '0-0-13@비격진천뢰', '0-0-14@완구', '0-0-15@총통화차', '0-0-16@신기전화차', '0-0-17@불랑기', '0-0-18@일총통', '0-0-19@삼총통', '0-0-20@이총통', '0-0-21@사전총통', '0-0-22@사전장총통', '0-0-23@신제총통', '0-0-24@세총통', '0-0-25@화통', '0-0-26@질려포통', '0-0-27@천문도', '0-0-28@황도중서합도', '0-0-29@천상열차분야지도', '0-0-30@신법천문도', '1-3-2@각운동량보존법칙', '1-3-3@스트로보스코프0', '1-3-3.1@스트로보스코프1', '1-3-4@가속도0', '1-3-5@운동법칙0', '1-3-5.1@작용반작용', '1-3-5.2@관성', '1-3-5.3@작용반작용', '1-3-6@관성', '1-3-7@베르누이의정리', '1-3-8@공은왜뜰까', '1-3-10@아르키메데스의원리', '1-3-10.1@배가뜨는원리0', '1-3-10.2@배가뜨는원리1', '1-3-11@자이로스코프', '1-3-12@강철구의운동', '1-3-13@아치쌓기', '1-3-14@회전판위의링', '1-3-15@떨어지는물체', '1-3-16@액체자석', '1-3-17@빗면', '1-3-18@도르래와지레', '1-3-20@열의이동', '1-3-20.1@물의대류', '1-3-22@브라운운동', '1-3-23@기체의스펙트럼1', '1-3-24@홀로그램', '1-3-25@전반사', '1-3-26@내진설계', '1-3-27@로봇의원리', '1-3-28@원심분리', '1-3-30@동전경주', '1-4-31@빛의성질', '1-4-32@렌즈놀이', '1-4-34@대형볼록렌즈', '1-4-34.1@편광', '1-4-36@하늘은왜푸른가', '1-4-37@tv화상전송', '1-4-38@빛의성질빛의혼합1', '1-4-38.1@빛의성질빛의혼합2', '1-4-39@잡히지않는물체', '1-4-39.1@허공입체영상', '1-4-40@편광1', '1-4-52@평행거울', '1-4-53@자석이흐르는강', '1-4-60@소리반사경', '1-4-61@횡파', '1-4-62@막대의공진', '1-4-63@줄없는하프', '1-4-64@소리의정상파', '1-4-66@달의모양', '1-4-67@물결파', '1-4-68@센자석약한자석', '1-4-68.1@홍채', '1-4-69@자석로켓', '1-4-70@편광2', '1-4-73@전지', '1-4-74@나노기술', '1-4-75@방전구', '1-4-76@포물면', '1-4-76.1@포물선', '2-4-81@탑리의지층', '2-4-82@지질시대의화석', '2-4-82.1@지질시대의화석2', '2-4-82.2@지질시대의화석3', '2-4-82.3@지질시대의화석4', '2-4-82.4@지질시대의화석6', '2-4-82.5@지질시대의화석7', '2-4-82.6@지질시대의화석8', '2-4-82.7@지질시대의화석9', '2-4-82.8@지질시대의화석10', '2-4-82.9@지질시대의화석11', '2-4-82.91@지질시대의화석12', '2-4-83@코리올리효과', '2-4-85@물의소용돌이', '2-4-86@용오름현상', '2-4-87@투명인체', '2-4-94@화학전지 0', '2-4-94.1@화학전지 1', '2-4-94.2@화학전지2', '2-4-96@수소로켓', '2-3-96@로켓의발달', '2-3-96.1@로켓의의발달2', '2-3-96.2@로켓의발달3', '2-3-96.3@로켓의발달5', '2-3-96.4@로켓의발달6', '2-3-96.5@로켓의발달7', '2-3-96.6@로켓의발달8', '2-3-96.7@로켓의발달9', '2-3-96.8@로켓의발달10', '2-3-96.9@로켓의발달12', '2-3-96.91@로켓의발달13', '2-3-96.92@로켓의발달14', '2-3-96.93@로켓의발달16', '2-3-96.94@로켓의발달17', '2-3-96.95@로켓의발달18', '2-3-96.96@로켓의발달19', '2-3-96.97@로켓의발달20', '2-3-96.98@로켓의발달21', '2-3-97@아기의탄생', '2-3-103@신경반응', '2-3-104@유전자재조합', '2-3-105@세포융합', '2-3-106@핵치환', '2-3-107@조직배양', '2-3-108@단백질이만들어지는방법', '2-3-110@DNA', '2-3-110.1@DNA1', '2-3-111@유전공학', '3-1-1@태양열발전', '3-1-2@태양광발전', '3-1-3@풍력발전', '3-1-4@연료전지', '3-1-5@수력발전','3-1-10@플라네타리움', '3-1-7@공기의압력', '3-1-8@소리의전달', '3-1-9@진공에서의선풍기', '0-0-90@spring constellations', '0-0-93@winter constellations'
]

# Parse items and names into separate lists
itemList = []
nameList = []

for itm in fullOrder:
    splitedItm = itm.split('@')
    itemList.append(splitedItm[0])
    nameList.append(splitedItm[1])

itemLength = len(itemList)

# Function to handle modulo operation for cycling through items
def mod(number, modulo):
    return (number % modulo + modulo) % modulo

# Initialize session state variables from query parameters
if 'itemNo' not in st.session_state:
    query_params = st.query_params
    st.session_state['itemNo'] = query_params.get('item', [itemList[0]])[0]
if 'lang' not in st.session_state:
    query_params = st.query_params
    st.session_state['lang'] = query_params.get('lang', ['kor'])[0]

itemNo = st.session_state['itemNo']
lang = st.session_state['lang']

# Validate itemNo
if itemNo not in itemList:
    itemNo = itemList[0]
    st.session_state['itemNo'] = itemNo
index = itemList.index(itemNo)

# Header Section: Keeping only the title centered
header_col1, header_col2, header_col3 = st.columns([1, 3, 1])

# Display the Title in the center column
with header_col2:
    st.markdown(f"<h2 style='text-align: center;'>{nameList[index]}</h2>", unsafe_allow_html=True)

# Language label display logic
language_label = "언어" if lang == 'kor' else "Language"

# Dropdown for "Language"/"언어" in the right column
with header_col3:
    language_display = {'eng': 'English', 'kor': '한국어'}
    reverse_language_display = {v: k for k, v in language_display.items()}
    language_options = list(language_display.values())
    language_index = language_options.index(language_display.get(lang, 'English'))
    language = st.selectbox(language_label, language_options, index=language_index)
    lang_selected = reverse_language_display[language]

# Update session state if language changes
if lang != lang_selected:
    st.session_state['lang'] = lang_selected
    lang = lang_selected

# Extract and display the parsed components from the selected order
exhibition_hall, floor_level, exhibit_number = itemNo.split('-')
floor_level_display = f"B{floor_level}" if floor_level.startswith('0') else f"{floor_level}층"
st.write(f"**전시관**: {exhibition_hall} / **층수**: {floor_level_display} / **전시물 숫자**: {exhibit_number}")

# Content Display Area
text_file_path = os.path.join("textfiles", f"{itemNo}{lang}.txt")
content_col = st.container()  # Container for the content area

with content_col:
    if os.path.exists(text_file_path):
        with open(text_file_path, "r", encoding="utf-8") as file:
            st.write(file.read())
    else:
        st.write("Text file not found.")

# Audio Player Section
audio_file_path = os.path.join("mp3files", f"{itemNo}{lang}.mp3")
st.write("---")  # Separator line
audio_col = st.container()

with audio_col:
    if os.path.exists(audio_file_path):
        st.audio(audio_file_path)
    else:
        st.write("Audio file not found.")

# Align navigation buttons with the audio component
button_col1, button_col2, button_col3 = st.columns([1, 6, 1])  # Adjust ratios for alignment to place buttons on ends

with button_col1:
    next_clicked = st.button("Previous", key="prev")  # This button is now on the left end

with button_col3:
    prev_clicked = st.button("Next", key="next")  # This button is now on the right end

if prev_clicked:
    next_index = mod(index + 1, itemLength)  # 'Next' button now navigates to the previous item
    st.session_state['itemNo'] = itemList[next_index]

if next_clicked:
    prev_index = mod(index - 1, itemLength)  # 'Previous' button now navigates to the next item
    st.session_state['itemNo'] = itemList[prev_index]
