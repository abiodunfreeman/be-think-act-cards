const cardsData = [
  {
    title: "Limits of Your Control",
    type: "think",
    desc: (
      <p>
        When you're worried about something today, write down 3 things about it
        that you can control, and 3 things you can't.
        <br />
        <br />
        For example, you can control how much you rest and hydrate when you're
        sick, but you can't control exactly when you'll feel better.
        <br />
        <br />
        Focus your efforrts on what's in your power, and let go of fruitless
        mental efforts that try to force the outcome you want.
      </p>
    ),
  },
  {
    title: "An Uplifting Relationship",
    type: "act",
    desc: (
      <p>
        Nothing has a bigger impact on our well-being than our connections to
        others.
        <br />
        <br />
        Think of someone you know who brings out the best in you and who
        obviously values you.
        <br />
        <br />
        Contact this person today, and arrange a time to get together if they
        live close by, or to speak by phone if they're far away.
      </p>
    ),
  },
  {
    title: "Notice What You Have",
    type: "be",
    desc: (
      <p>
        The best parts of our lives fade into the background and become
        invisible, unless they're taken from us.
        <br />
        <br />
        Become more aware today of the ordinary things you're glad to have, such
        as the air you breate, the clothes you wear, the home that shelters you,
        and the people you love.
        <br />
        <br />
        Acknowledge the everyday gifts that fill your life.
      </p>
    ),
  },
  {
    title: "Should You Worry?",
    type: "think",
    desc: (
      <p>
        It's hard to let go of chronic worries, in part because our minds often
        tell us we need to worry about something and that worrying is in some
        way useful--even if we can't control the outcome.
        <br />
        <br />
        Notice if this belief is driving your worry today, and give yourself
        permission to let go of unproductive trains of thought.
      </p>
    ),
  },
  {
    title: "Take Care of YOurself",
    type: "act",
    desc: (
      <p>
        What's one nice thing you can plan for yourself today that you'll look
        forward to and enjoy doing?
        <br />
        <br />
        Put it in your calendar at a specific time.
        <br />
        <br />
        It can be something small, like treating yourself to a fancy coffee
        drink or listening to your favorite music.
        <br />
        <br />
        If it's hard to think of ideas, then imagine you were planning it for
        someone you deeply care about.
      </p>
    ),
  },
  {
    title: "Open to Reality",
    type: "be",
    desc: (
      <p>
        When you find yourself feeling annoyed or frustrated today, notice your
        thoughts.
        <br />
        <br />
        Are you silently insisting that reality should be different than it is?
        <br />
        <br />
        That things should work better, be easier, go faster, or be better
        organized?
        <br />
        <br />
        Let go of the struggle as you open to the reality that is.
      </p>
    ),
  },
  {
    title: "Set Your Course",
    type: "think",
    desc: (
      <p>
        As you start a home or work project, challenge any unhelpful thoughts
        that pop into your head, like, "This isn't going to go well" or "I don't
        know what I'm doing."
        <br />
        <br />
        Instead, fill your mind with realistic thoughts.
        <br />
        <br />
        Focus on the effort you're going to put in, which is under your control,
        rather than on the outcome (e.g., "I'll do my best to solve problems as
        they come up").
      </p>
    ),
  },
  {
    title: "Hands-Free Waiting",
    type: "be",
    desc: (
      <p>
        The next time you're waiting somewhere, like in line at the grocery
        store, look around you and take in the scene.
        <br />
        <br />
        Resist the urge to immediately pull out your phone.
        <br />
        <br />
        Instead, be fully in the experience of this moment.
        <br />
        <br />
        Who or what do you see?
        <br />
        <br />
        What do you notice that you wouldn't have otherwise?
      </p>
    ),
  },
  {
    title: "Be Encouraging",
    type: "act",
    desc: (
      <p>
        The next time you're feeling down, think of someone in your life who
        needs encouragement, and reach out to support them.
        <br />
        <br />
        It might help you feel better, and even if it doesn't, it will help the
        person you care about.
        <br />
        <br />
        And, more importantly, it shows you that you can be of service even when
        you're feeling less than 100%.
      </p>
    ),
  },
  {
    title: "Arms Up",
    type: "be",
    desc: (
      <p>
        Sit or stand comfortably, with your arms at your sides.
        <br />
        <br />
        Become aware of the pull of gravity and any other sensations in your
        hands and arms.
        <br />
        <br />
        Continue to pay attention to these sensations as you slowly rais your
        arms in front of you, and then slowly lower them.
        <br />
        <br />
        Repeat 4-5 times.
      </p>
    ),
  },
  {
    title: "Unnotices Sounds",
    type: "be",
    desc: (
      <p>
        Listen today for sounds that you're usually not aware of.
        <br />
        <br />
        For Example, your shoes as you slip them on, an orange as you peel it,
        or the wind chimes in your neighborhood.
        <br />
        <br />
        The sounds might be quite subtle and easily missed.
        <br />
        <br />
        What happens when you pay attention to parts of your life that usually
        go unnoticed?
      </p>
    ),
  },
  {
    title: "Breaking the Worry Cycle",
    type: "be",
    desc: (
      <p>
        Worry is often drive by the question, "What if _____ happens?" where the
        blank is anything we might be afraid of.
        <br />
        <br />
        You can break the cycle of worry by not arguing with your "what if."
        <br />
        <br />
        Instead, tell yourself, "That might happen, and I would have to deal
        with it if it did."
        <br />
        <br />
        Then, bring your focus to what is actually happening in that moment.
      </p>
    ),
  },
  {
    title: "Thank You, Good Night",
    type: "be",
    desc: (
      <p>
        Place a pen and paper by your bed
        <br />
        <br />
        Just before you go to bed tonight, write down 3 things you're grateful
        for about your day.
        <br />
        <br />
        Your gratitude list might include the peopel you love, daily experiences
        (like the food you eat), something that went well today, or whatever you
        like.
        <br />
        <br />
        Allow what you write to fill your mind as you turn off the light and go
        to sleep.
      </p>
    ),
  },
  {
    title: "Breath Minute",
    type: "be",
    desc: (
      <p>
        Set a 1-minute timer.
        <br />
        <br />
        Take nice even breaths, really slowing down the exhalation, for 1
        minute, and count how many breaths you take.
        <br />
        <br />
        When you find yourself feeling stressed or worried, pause and take that
        number (a minuet's worth) of slow, claming breaths-no need to use a
        timer.
        <br />
        <br />
        Notice if the mind starts to settle simpoly by returning to the breath.
      </p>
    ),
  },
  {
    title: "Wash with Awareness",
    type: "be",
    desc: (
      <p>
        When you wash your hands today, be aware of the full experience.
        <br />
        <br />
        Notice the sound of the faucet, the wetness and temperature of the
        water, the scent and slipperiness of the soap, the movements of your
        hands against each other, and the sensations of drying your hands.
        <br />
        <br />
        Finally, be aware of the feeling of having just-washed hands.
      </p>
    ),
  },
  {
    title: "A Body That Works",
    type: "be",
    desc: (
      <p>
        Make a mental list of all the ways your body is working well, even if
        you're dealing with a chronic health issue.
        <br />
        <br />
        Notice all the systems that have to function to keep you alive and allow
        you to experience life, like your brain, lungs, and heart.
        <br />
        <br />
        More in our lives is often right than we realize.
      </p>
    ),
  },
];
export default cardsData;
