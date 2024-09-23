//contact.jsx Jongho Baek 301070931 24.09.17
export default function Contact() {
      return (
       <>
       <main>
       <h1 id='contacth1'>CONTACT: SUNG192555@GMAIL.COM</h1>
        <hr id='homehr1'></hr>
        <hr id='homehr2'></hr>
        <hr id='homehr3'></hr>  
      <h2 id='contacth2'>CONTACT FORM</h2>
      <form id="ffp">
        <label id="contactblock" for="name">Your Name: </label><input id="name" type="text" name="name"></input>
        <label id="contactblock" for="Phone">Your Phone Number: </label><input id="Phone" type="text" name="Phone"></input>
        <label id="contactblock" for="Email">Your Email: </label><input id="Email" type="text" name="Email"></input>
        <fieldset>
            <label id="contactblock" for="comment">Comments: </label>
            <textarea id="comments" name="comments" cols="150" rows="10" placeholder="Please provide your comments"></textarea>
        </fieldset>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
        </form>
        </main>
        
       </>
      );
     }
    