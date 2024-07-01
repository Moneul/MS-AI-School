import streamlit as st
import finance_naver

# 사이드바 화면
st.sidebar.header("로그인")
user_id = st.sidebar.text_input("아이디 입력", value='streamlit', max_chars=15)
user_pwd = st.sidebar.text_input("패스워드 입력", value="1234", type="password")
# btn_login = st.sidebar.button("로그인")

if user_pwd == "1234" and user_id == "streamlit":
        st.sidebar.header("정지훈의 포트폴리오")
        opt_data = ["환율 조회", "따릉이", "유성우"]
        menu = st.sidebar.selectbox("메뉴 선택", opt_data, index=0)
        st.sidebar.write("선택한 메뉴 : ", menu)
        if menu == "환율 조회":
            st.subheader("환율 조회 >>>>>>>>")
            finance_naver.exchange_main()
        elif menu == "따릉이":
            st.subheader("따릉이 데이터 분석 >>>>>>>>")
        elif menu == "따릉이":
            st.subheader("따릉이 데이터 분석 >>>>>>>>")
        else:
            st.subheader("MS AI School 15반 29번 정지훈입니다.")

elif user_pwd != "1234" and user_id == "streamlit":
    st.sidebar.write("잘못된 패스워드 입니다.")

elif user_id != "streamlit":
    st.sidebar.write("잘못된 아이디 입니다.")

    
# 메인 화면
# st.subheader("MS AI School 15반 29번 정지훈입니다.")
# 설치 라이브러리 목록 만들기
# pip list --format=freeze > requirements.txt
# # requirements.txt 업데이트
# pip freeze > requirment.txt

# # 설치
# pip install -r requirement.txt