## #Description
202112709 박상민 기말과제입니다. 서버는 AWS를 사용했고 서점을 주제로 구현했습니다.<br>
아래의 2개 파일에 들어가셔서 주석에 맞게 값을 채운 후 사용하면 됩니다!
<pre>
  /config/config.js
  /config/mysql-properties.js
</pre>

## #BaseUrl
<pre>
  http://3.34.6.11:3000/
</pre>

## #API Document
:: Book 조회 ( 고객 이용 )
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>URL</th>
      <th>설명</th>
      <th>CURD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/book</td>
      <td>책 전체 보기</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/book/id/:id</td>
      <td>PK로 책 보기</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/book/publisher/:publisher</td>
      <td>출판사로 책 검색</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/book/author/:author</td>
      <td>저자로 책 검색</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/book/ISBN/:isbn</td>
      <td>ISBN으로 책 검색</td>
      <td>READ</td>
    </tr>
  </tbody>
</table>

:: Book 관리 ( 관리자 이용 )
<table>
  <thead>
  <tr>
    <th>Method</th>
    <th>URL</th>
    <th>설명</th>
    <th>CURD</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/admin/login</td>
      <td>관리자 로그인 화면</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/admin/signup</td>
      <td>관리자 가입 화면</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/admin/books</td>
      <td>책 전체 보기</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/admin/login</td>
      <td>관리자 로그인 요청</td>
      <td>READ</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/admin/signup</td>
      <td>관리자 가입 요청</td>
      <td>CREATE</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/admin/create/book</td>
      <td>책 추가(로그인 후)</td>
      <td>CREATE</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/admin/update/book</td>
      <td>책 수정(로그인 후)</td>
      <td>UPDATE</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/admin/delete/book/:id</td>
      <td>책 삭제(로그인 후)</td>
      <td>DELETE</td>
    </tr>
  </tbody>
</table>

## #Tech
#nodejs #express #aws #MySQL #mysql2 #sequelize #passport #bcrypt #mvc #ejs

## #License
<pre>
 MIT License

Copyright (c) 2021 ParkSM
     
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>
