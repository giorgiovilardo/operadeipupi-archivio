<script lang="ts">
  let email = $state("");
  let subject = $state("");
  let message = $state("");
</script>

<div class="content-body">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h1>Inviaci una mail:</h1>
      <form action="mailto:a@a.com" enctype="text/plain">
        <div class="mb-4">
          <label class="label" for="contact-email">La tua email:</label>
          <input
            id="contact-email"
            class="input input-bordered w-full"
            name="email"
            type="email"
            bind:value={email}
            required
          />
        </div>
        <div class="mb-4">
          <label class="label" for="contact-subject">Oggetto:</label>
          <input
            id="contact-subject"
            class="input input-bordered w-full"
            name="subject"
            type="text"
            bind:value={subject}
            required
          />
        </div>
        <div class="mb-4">
          <label class="label" for="contact-message">Il tuo messaggio:</label>
          <textarea
            id="contact-message"
            class="textarea textarea-bordered w-full"
            name="message"
            bind:value={message}
            required
            rows="5"
          ></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Invia</button>
      </form>
    </div>
    <div>
      <h1>Dove siamo:</h1>
      <div class="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.9285478346756!2d13.36839111532762!3d38.11859667969843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e5ed839585bf%3A0x423c56dd18c00b3c!2sMuseo%20internazionale%20delle%20marionette%20Antonio%20Pasqualino!5e0!3m2!1sen!2sit!4v1592910523118!5m2!1sen!2sit"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen
          title="Mappa con indirizzo Museo delle Marionette"
        ></iframe>
      </div>
    </div>
  </div>
</div>
