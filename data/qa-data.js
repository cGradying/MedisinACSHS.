window.MEDISIN_QA = [

  {
    id: 'A1',
    keywords: ['maliit na sugat', 'sugat sa daliri', 'small wound', 'small cut finger', 'minor cut'],
    kit: 'Disposable gloves, wound-cleaning/antiseptic product, sterile gauze, adhesive bandage.',
    reply: `For a small wound on your finger:
- Wash or sanitize your hands.
- Rinse the wound with clean running water.
- Apply an appropriate wound-cleaning product as directed.
- Cover with sterile gauze or an adhesive bandage.`
  },
  {
    id: 'A2',
    keywords: ['nagasgasan', 'gasgas', 'pagkadapa', 'scrape knee', 'abrasion', 'nadapa'],
    kit: 'Gloves + gauze + adhesive bandage + wound-cleaning product.',
    reply: `For a scraped knee from a fall:
- Put on gloves.
- Rinse the abrasion with clean water.
- Clean the surrounding area.
- Cover with gauze or a bandage.`
  },
  {
    id: 'A3',
    keywords: ['konting dugo', 'konting dugo sa daliri', 'small amount of blood finger'],
    kit: 'Gloves + sterile gauze + adhesive bandage.',
    reply: `For a small amount of bleeding on your finger:
- Put on gloves.
- Apply gentle direct pressure using sterile gauze.
- Continue until the bleeding stops.
- Cover the wound.`
  },
  {
    id: 'A4',
    keywords: ['hindi tumitigil', 'pagdurugo', 'sugat hindi tumitigil', 'bleeding wont stop', 'bleeding does not stop'],
    urgent: true,
    kit: 'Gloves + sterile gauze.',
    reply: `🚨 If bleeding from a wound won't stop:
- Apply firm, continuous pressure using gauze.
- Do not repeatedly remove the gauze to check.
- Call a teacher, school nurse, or a responsible adult.
- Seek urgent medical attention.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'A5',
    keywords: ['malalim na sugat', 'deep wound', 'deep cut'],
    urgent: true,
    kit: 'Gloves + sterile gauze.',
    reply: `🚨 For a deep wound:
- Do not attempt to close or repair it yourself.
- Apply direct pressure if it's bleeding.
- Get an adult immediately.
- Seek professional medical care.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'A6',
    keywords: ['sugat galing sa maruming bagay', 'dirty wound', 'contaminated wound', 'maruming bagay'],
    kit: 'Gloves + gauze + wound-cleaning product.',
    reply: `For a wound from a dirty object:
- Wash your hands or use gloves.
- Rinse the wound thoroughly.
- Cover it with sterile gauze.
- Have it medically assessed if it's deep or contaminated.`
  },
  {
    id: 'A7',
    keywords: ['naputol gunting', 'gunting', 'scissors cut'],
    kit: 'Gloves + gauze + adhesive bandage.',
    reply: `If you got cut while using scissors:
- Put the scissors down safely.
- Apply pressure with sterile gauze.
- Clean the wound if it's minor.
- Cover it with a bandage.`
  },
  {
    id: 'A8',
    keywords: ['nabutas ang balat', 'matulis na bagay', 'punctured skin', 'sharp object'],
    kit: 'Gauze + bandage.',
    reply: `For skin punctured by a sharp object:
- Stop the activity.
- Do not dig into the wound.
- Cover the area.
- Seek medical assessment if it's deep.`
  },
  {
    id: 'A9',
    keywords: ['splinter sa daliri', 'splinter finger', 'tinik sa daliri'],
    kit: 'Tweezers + gloves + wound-cleaning product + bandage.',
    reply: `For a splinter in your finger:
- Wash your hands and the area.
- If it's superficial, use clean tweezers.
- Remove it gently in the direction it entered.
- Clean and cover the area.`
  },
  {
    id: 'A10',
    keywords: ['splinter malalim', 'deep splinter'],
    kit: 'Gloves + sterile gauze.',
    reply: `If the splinter is deep:
- Do not dig for it yourself.
- Protect the area with gauze.
- Tell an adult.
- Seek professional care.`
  },

  {
    id: 'B11',
    keywords: ['napaso sa kamay', 'burn hand', 'napaso kamay'],
    kit: 'Burn dressing / non-stick sterile dressing.',
    reply: `For a burn on your hand:
- Remove yourself from the heat source.
- Cool the burn under cool running water for about 20 minutes.
- Do not apply ice, toothpaste, or butter.
- Cover appropriately after cooling.`
  },
  {
    id: 'B12',
    keywords: ['napaso sa kawali', 'burn pan', 'kawali'],
    kit: 'Burn dressing.',
    reply: `For a burn from a hot pan: cool it under running water first, avoid ice or home remedies, then protect it with a non-stick burn dressing.`
  },
  {
    id: 'B13',
    keywords: ['napaso glue gun', 'glue gun burn'],
    kit: 'Burn dressing.',
    reply: `For a glue gun burn: cool it under running water, protect the area, and monitor it for changes.`
  },
  {
    id: 'B14',
    keywords: ['paltos', 'blister paso', 'burn blister'],
    kit: 'Burn dressing.',
    reply: `If there's a blister from a burn:
- Cool the burn.
- Do not intentionally pop the blister.
- Protect it with a sterile non-stick dressing.`
  },
  {
    id: 'B15',
    keywords: ['malaki ang paso', 'large burn', 'big burn'],
    urgent: true,
    kit: 'Burn dressing only for temporary protection.',
    reply: `🚨 For a large burn:
- Remove yourself from the heat source.
- Cool it if possible.
- Do not apply substances to it.
- Get immediate professional medical assistance.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'B16',
    keywords: ['napaso sa mukha', 'face burn', 'burn face'],
    urgent: true,
    reply: `🚨 Burns on the face should be assessed by a medical professional immediately, especially if the burn is significant. No kit item is a substitute for professional care here.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'B17',
    keywords: ['napasukan ng kemikal ang balat', 'chemical skin', 'chemical burn skin'],
    urgent: true,
    kit: 'Gloves.',
    reply: `🚨 For a chemical exposure on skin:
- Move away from the source safely.
- Remove contaminated clothing if it's safe to do so.
- Rinse with plenty of running water.
- Seek urgent medical help.`
  },
  {
    id: 'B18',
    keywords: ['napasukan ng kemikal ang mata', 'chemical eye', 'chemical in eye'],
    urgent: true,
    kit: 'Saline/eyewash if available.',
    reply: `🚨 For a chemical in the eye:
- Immediately rinse continuously with clean running water or eyewash.
- Do not rub the eye.
- Continue rinsing while seeking emergency care.`
  },

  {
    id: 'C19',
    keywords: ['na sprain ang ankle', 'ankle sprain', 'sprained ankle'],
    kit: 'Instant cold pack + elastic bandage.',
    reply: `For a sprained ankle:
- Stop the activity.
- Rest.
- Apply a cold pack as directed.
- Use gentle elastic support if appropriate.
- Seek care if it's severe.`
  },
  {
    id: 'C20',
    keywords: ['namamaga ang ankle', 'swollen ankle'],
    kit: 'Instant cold pack.',
    reply: `For a swollen ankle: rest it, apply a cold pack, elevate it, and monitor how it responds.`
  },
  {
    id: 'C21',
    keywords: ['nabalian ng braso', 'broken arm', 'fractured arm'],
    urgent: true,
    kit: 'Triangular bandage for support if appropriate.',
    reply: `🚨 If you think your arm is broken:
- Do not try to straighten it.
- Keep it still.
- Get an adult.
- Seek urgent medical care.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'C22',
    keywords: ['masakit wrist', 'wrist pain', 'nahulog wrist'],
    kit: 'Cold pack + elastic bandage.',
    reply: `For wrist pain after a fall: rest it, apply a cold pack, use gentle support if appropriate, and get it medically assessed if the pain is severe.`
  },
  {
    id: 'C23',
    keywords: ['nabangga ang tuhod', 'bumped knee', 'knee bump'],
    kit: 'Instant cold pack.',
    reply: `For a bumped knee: rest it, apply a cold pack, and monitor swelling and movement.`
  },
  {
    id: 'C24',
    keywords: ['namamaga ang daliri', 'tamaan ng bola', 'swollen finger ball', 'jammed finger'],
    kit: 'Cold pack.',
    reply: `For a swollen finger after being hit by a ball: rest it, apply a cold pack, avoid forceful movement, and seek assessment if there's deformity or severe pain.`
  },
  {
    id: 'C25',
    keywords: ['may pasa', 'bruise'],
    kit: 'Instant cold pack.',
    reply: `For a bruise: rest the area, apply a cold pack, and monitor it.`
  },
  {
    id: 'C26',
    keywords: ['masakit ang muscles', 'muscle pain sports', 'sore muscles'],
    kit: 'Cold pack.',
    reply: `For sore muscles after sports: rest, allow gentle recovery, and use a cold pack if it's a recent injury.`
  },
  {
    id: 'C27',
    keywords: ['hindi ko maigalaw', 'cannot move injured part', 'cant move injured'],
    kit: 'Triangular/elastic bandage only for appropriate support.',
    reply: `If you can't move the injured part: stop using it, don't force movement, get an adult, and seek medical assessment.`
  },
  {
    id: 'C28',
    keywords: ['mukhang deformed', 'deformed ankle', 'deformed joint'],
    urgent: true,
    reply: `🚨 Do not try to straighten a deformed joint. Keep weight off it and seek urgent medical care right away. No kit item is a substitute for that.

Type "hospital near me" and I can help you find the nearest hospital.`
  },

  {
    id: 'D29',
    keywords: ['masakit ang ulo', 'headache', 'sumasakit ulo'],
    kit: 'None.',
    reply: `For a headache: rest somewhere quiet, drink water if appropriate, reduce screen or light exposure, and monitor your symptoms. No kit item is required for this on its own.`
  },
  {
    id: 'D30',
    keywords: ['nahihilo ako', 'dizzy', 'nahihilo'],
    kit: 'None.',
    reply: `If you're feeling dizzy: sit or lie down somewhere safe, don't stand up suddenly, tell an adult, hydrate if appropriate, and seek help if it gets severe.`
  },
  {
    id: 'D31',
    keywords: ['mahihimatay', 'about to faint', 'parang mahihimatay'],
    kit: 'None.',
    reply: `If you feel like you're about to faint: sit or lie down, tell an adult, don't continue the activity, and seek help if symptoms worsen.`
  },
  {
    id: 'D32',
    keywords: ['nilalagnat', 'may lagnat', 'fever'],
    kit: 'Digital thermometer.',
    reply: `If you have a fever: use the thermometer, record the temperature, rest and hydrate if appropriate, and tell an adult.`
  },
  {
    id: 'D33',
    keywords: ['37.8', 'temperature ko', '38 degrees', 'temperature reading'],
    kit: 'Digital thermometer.',
    reply: `Recheck the temperature correctly, record the result, consider any other symptoms you have, and inform a responsible adult.`
  },
  {
    id: 'D34',
    keywords: ['paano gamitin ang thermometer', 'how to use thermometer'],
    kit: 'Digital thermometer.',
    reply: `To use the thermometer: turn it on, place it according to the manufacturer's instructions, wait for the reading, record it, then clean and store it properly.`
  },
  {
    id: 'D35',
    keywords: ['masakit ulo pagkatapos matamaan', 'hit head headache', 'matamaan ang ulo'],
    urgent: true,
    kit: 'Cold pack may be used for a minor bump if appropriate.',
    reply: `🚨 For a headache after a hit to the head: stop the activity, tell an adult, monitor closely, and seek medical assessment, especially if the headache worsens or there's vomiting or confusion.`
  },
  {
    id: 'D36',
    keywords: ['nagsuka pagkatapos matamaan', 'vomit after head hit', 'nagsuka matamaan ulo'],
    urgent: true,
    reply: `🚨 Vomiting after a head injury needs urgent medical assessment — tell an adult immediately and seek care right away. No kit item is a substitute for that.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'D37',
    keywords: ['biglang sobrang sakit ng ulo', 'sudden severe headache'],
    urgent: true,
    reply: `🚨 A sudden or severe headache, especially with other neurological symptoms, needs urgent medical assessment.

Type "hospital near me" and I can help you find the nearest hospital.`
  },

  {
    id: 'E38',
    keywords: ['alikabok sa mata', 'dust in eye'],
    kit: 'Saline.',
    reply: `For dust in the eye: don't rub it, rinse with saline or clean water, blink a few times, and seek care if it's persistent.`
  },
  {
    id: 'E39',
    keywords: ['namumula ang mata', 'red eye', 'red eyes'],
    kit: 'Saline if appropriate.',
    reply: `For red eyes: don't rub them, rinse if a foreign material is suspected, inform an adult, and seek assessment if it persists.`
  },
  {
    id: 'E40',
    keywords: ['bagay na pumasok sa mata', 'something in eye', 'foreign object eye'],
    kit: 'Saline.',
    reply: `For something in the eye: don't use tweezers, gently rinse if it's loose, and seek eye care if it feels embedded.`
  },
  {
    id: 'E41',
    keywords: ['dumudugo ang ilong', 'nosebleed', 'dugo sa ilong'],
    kit: 'Gloves; gauze for cleanup if needed.',
    reply: `For a nosebleed: sit upright, lean forward, pinch the soft part of your nose continuously, and seek care if it's persistent or heavy.`
  },
  {
    id: 'E42',
    keywords: ['paulit ulit nosebleed', 'recurring nosebleed', 'madalas na nosebleed'],
    kit: 'Gloves/gauze.',
    reply: `For recurring nosebleeds: stop the activity, apply proper pressure, tell an adult, and seek medical assessment.`
  },
  {
    id: 'E43',
    keywords: ['bagay na nakabara sa lalamunan', 'choking', 'nabara sa lalamunan'],
    urgent: true,
    reply: `🚨 If someone is choking and unable to breathe, speak, or cough effectively, this is an emergency — call for help immediately and use recognized choking first aid response. A CPR barrier is only needed if CPR becomes necessary.`
  },

  {
    id: 'F44',
    keywords: ['umuubo ako', 'cough', 'ubo'],
    kit: 'None.',
    reply: `For a cough: rest, hydrate, monitor your symptoms, and seek care if it's severe, persistent, or you have difficulty breathing.`
  },
  {
    id: 'F45',
    keywords: ['sipon ako', 'colds', 'sipon'],
    kit: 'None.',
    reply: `For a cold: rest, drink fluids, practice good hand hygiene, and monitor your symptoms.`
  },
  {
    id: 'F46',
    keywords: ['masakit lalamunan', 'sore throat'],
    kit: 'None.',
    reply: `For a sore throat: rest, drink fluids, tell an adult, and seek assessment if swallowing or breathing becomes difficult.`
  },
  {
    id: 'F47',
    keywords: ['nasusuka ako', 'vomiting', 'suka'],
    kit: 'None.',
    reply: `For vomiting: rest, take small sips of fluid, monitor how you feel, and seek care if vomiting is repeated or you show signs of dehydration.`
  },
  {
    id: 'F48',
    keywords: ['nagtatae ako', 'diarrhea', 'tae'],
    kit: 'None.',
    reply: `For diarrhea: hydrate as tolerated, tell an adult, monitor for dehydration, and seek medical care if it's severe or persistent.`
  },
  {
    id: 'F49',
    keywords: ['masakit tiyan', 'stomach ache', 'sakit ng tiyan'],
    kit: 'None.',
    reply: `For a stomach ache, it helps to know more first — where's the pain, how severe, how long, and any other symptoms? Mild cases can usually be monitored, but severe symptoms need medical assessment.`
  },
  {
    id: 'F50',
    keywords: ['sobrang sakit ng tiyan', 'severe stomach pain'],
    urgent: true,
    reply: `🚨 Severe stomach pain needs an adult and urgent medical assessment right away.

Type "hospital near me" and I can help you find the nearest hospital.`
  },

  {
    id: 'G51',
    keywords: ['nangangati pagkatapos kumain', 'itchy after eating', 'allergic reaction food'],
    kit: 'None.',
    reply: `If you're itchy after eating: stop the exposure (stop eating that food), tell an adult, and monitor for swelling or breathing problems.`
  },
  {
    id: 'G52',
    keywords: ['namamaga ang lips', 'swollen lips'],
    urgent: true,
    reply: `🚨 Swollen lips can be a sign of a serious allergic reaction. Seek emergency assistance immediately.`
  },
  {
    id: 'G53',
    keywords: ['namamaga ang dila', 'swollen tongue'],
    urgent: true,
    reply: `🚨 A swollen tongue is an emergency — call for emergency medical help immediately.`
  },
  {
    id: 'G54',
    keywords: ['nahihirapan akong huminga', 'difficulty breathing', 'hirap huminga'],
    urgent: true,
    reply: `🚨 If you're having difficulty breathing:
- Stop the activity.
- Sit upright.
- Tell an adult immediately.
- Seek emergency medical assistance.`
  },
  {
    id: 'G55',
    keywords: ['hinihingal pagkatapos tumakbo', 'out of breath after running', 'hinihingal'],
    reply: `Being out of breath after running: stop exercising, rest, and monitor yourself. Seek urgent help if your breathing doesn't return to normal, or if you feel chest pain or faint.`
  },
  {
    id: 'G56',
    keywords: ['sumasakit dibdib', 'masakit dibdib', 'chest pain'],
    urgent: true,
    reply: `🚨 For chest pain: stop the activity, tell an adult, and seek urgent medical assessment.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'G57',
    keywords: ['mabilis ang tibok ng puso', 'fast heartbeat', 'racing heart'],
    reply: `For a fast heartbeat: sit and rest, tell an adult, monitor yourself, and seek urgent help if you also have chest pain, fainting, or severe difficulty breathing.`
  },
  {
    id: 'G58',
    keywords: ['biglang nanghina', 'sudden weakness', 'nanghina'],
    reply: `For sudden weakness: sit or lie down safely, tell an adult, watch for warning signs, and get medical help if it's severe or persistent.`
  },

  {
    id: 'H59',
    keywords: ['nilalamig at nanginginig', 'shivering cold', 'malamig at nanginginig'],
    kit: 'Emergency blanket + thermometer if needed.',
    reply: `If you're cold and shivering: move somewhere warm, dry yourself off, tell an adult, and use an emergency blanket if appropriate.`
  },
  {
    id: 'H60',
    keywords: ['nabasa at sobrang lamig', 'wet and very cold', 'hypothermia'],
    urgent: true,
    kit: 'Emergency blanket.',
    reply: `🚨 If you got wet and are very cold: move to shelter, remove wet outer clothing, warm up gradually with an emergency blanket, and seek help if you feel confused or drowsy.`
  },
  {
    id: 'H61',
    keywords: ['nahilo dahil sa sobrang init', 'dizzy from heat', 'heat dizziness'],
    reply: `If you're dizzy from the heat: stop the activity, move to a cool place, hydrate if appropriate, tell an adult, and seek help if it's severe.`
  },
  {
    id: 'H62',
    keywords: ['heat exhaustion'],
    urgent: true,
    kit: 'Thermometer if appropriate; otherwise none.',
    reply: `🚨 For possible heat exhaustion: move to a cool place, rest, sip fluids if it's safe, cool the body down, have an adult supervise, and get medical help if it worsens.`
  },

  {
    id: 'I63',
    keywords: ['may nahimatay', 'someone fainted', 'nahimatay ang kasama'],
    urgent: true,
    kit: 'CPR barrier if CPR is needed.',
    reply: `🚨 If someone fainted:
- Call for help.
- Check responsiveness and breathing.
- If they are not breathing normally, begin CPR if you're trained, following emergency instructions.
- Do not give food or drink to an unconscious person.`
  },
  {
    id: 'I64',
    keywords: ['hindi humihinga ang kasama', 'not breathing', 'no pulse cpr'],
    urgent: true,
    kit: 'CPR face shield/barrier.',
    reply: `🚨 If your companion isn't breathing: call emergency services, get an AED if one is available, begin CPR if you're trained (use a barrier), and continue until help arrives.`
  },
  {
    id: 'I65',
    keywords: ['may seizure', 'seizure ang kasama', 'convulsion'],
    urgent: true,
    reply: `🚨 If someone is having a seizure: clear away hazards, protect their head, don't restrain them, don't put anything in their mouth, monitor their breathing, and seek emergency help.`
  },
  {
    id: 'I66',
    keywords: ['unconscious pero humihinga', 'unconscious but breathing'],
    urgent: true,
    kit: 'CPR barrier only if CPR becomes necessary.',
    reply: `🚨 If someone is unconscious but breathing: call for emergency help, monitor their breathing, place them in the recovery position when appropriate, and don't give them food or drink.`
  },
  {
    id: 'I67',
    keywords: ['severe bleeding'],
    urgent: true,
    kit: 'Gloves + sterile gauze.',
    reply: `🚨 For severe bleeding: put on gloves, apply firm direct pressure, add more gauze on top if needed (don't remove the soaked layer), and get emergency help immediately.`
  },
  {
    id: 'I68',
    keywords: ['nahulog spinal injury', 'spinal injury', 'possible spinal injury'],
    urgent: true,
    reply: `🚨 If someone fell and a spinal injury is possible: do not move them unnecessarily, call for emergency help, and monitor their breathing and responsiveness.`
  },
  {
    id: 'I69',
    keywords: ['nawalan ng malay pagkatapos mahulog', 'unconscious after fall', 'lost consciousness after falling'],
    urgent: true,
    reply: `🚨 Loss of consciousness after a fall needs urgent medical assessment. Monitor their responsiveness and breathing and don't leave them alone.

Type "hospital near me" and I can help you find the nearest hospital.`
  },
  {
    id: 'I70',
    keywords: ['biglang nalito ang kasama', 'sudden confusion', 'confused suddenly'],
    urgent: true,
    reply: `🚨 If a companion suddenly becomes confused: stop the activity, stay with them, call an adult, and seek urgent assessment.`
  },

  {
    id: 'J71',
    keywords: ['ano ang kukunin ko sa kit para sa maliit na sugat', 'what to get small wound kit'],
    reply: `Get your disposable gloves, wound-cleaning product, sterile gauze, and adhesive bandage.`
  },
  {
    id: 'J72',
    keywords: ['ano ang kukunin ko para sa sprain', 'what to get for sprain'],
    reply: `Get the instant cold pack and elastic bandage.`
  },
  {
    id: 'J73',
    keywords: ['ano ang kukunin ko para sa minor burn', 'what to get for burn', 'kukunin para sa paso'],
    reply: `First, cool the burn under running water. After cooling, get the sterile non-stick/burn dressing.`
  },
  {
    id: 'J74',
    keywords: ['ano ang kukunin kapag may splinter', 'what to get for splinter'],
    reply: `Get disposable gloves and clean tweezers if the splinter is superficial.`
  },
  {
    id: 'J75',
    keywords: ['ano ang kukunin kapag may alikabok sa mata', 'what to get for dust in eye'],
    reply: `Get the sterile saline/eyewash.`
  },
  {
    id: 'J76',
    keywords: ['ano ang kukunin kapag may fever', 'what to get for fever'],
    reply: `Get the digital thermometer.`
  },
  {
    id: 'J77',
    keywords: ['ano ang kukunin para gumawa ng sling', 'what to get to make a sling'],
    reply: `Get the triangular bandage.`
  },
  {
    id: 'J78',
    keywords: ['ano ang kukunin ko para ma secure ang gauze', 'what to secure gauze'],
    reply: `Get medical adhesive tape.`
  },
  {
    id: 'J79',
    keywords: ['ano ang gagamitin ko para maprotektahan ang kamay', 'protect hands first aid'],
    reply: `Get disposable gloves.`
  },
  {
    id: 'J80',
    keywords: ['ano ang gagamitin ko para putulin ang medical tape', 'cut medical tape'],
    reply: `Get the safety scissors.`
  },

  {
    id: 'K87',
    keywords: ['pagod lang ako', 'just tired', 'tired lang'],
    kit: 'None.',
    reply: `No medical item is needed just for being tired. Rest and hydrate.`
  },
  {
    id: 'K88',
    keywords: ['inaantok ako', 'sleepy', 'antok'],
    kit: 'None.',
    reply: `No kit item is appropriate simply for feeling sleepy. If it's unusual, or comes with confusion or fainting, tell an adult immediately.`
  },
  {
    id: 'K89',
    keywords: ['kinakabahan ako', 'nervous', 'anxious', 'kinakabahan'],
    kit: 'None.',
    reply: `No kit item is automatically required for feeling nervous. Sit somewhere safe, breathe slowly and comfortably, and talk to a trusted adult.`
  },
  {
    id: 'K90',
    keywords: ['masama lang ang pakiramdam ko pero hindi ko alam', 'not feeling well dont know why', 'masama pakiramdam'],
    kit: 'None yet — need more information.',
    reply: `I'd need to ask a few more questions before recommending anything. Can you tell me more about what you're feeling? If your symptoms are severe or getting worse quickly, seek medical assistance right away.`
  },

  {
    id: 'GREETING',
    keywords: ['hello', 'hi', 'hey', 'kumusta', 'good morning', 'good afternoon', 'good evening'],
    reply: `Hello, how can I help you? You can describe a symptom or injury (wounds, burns, sprains, fever, allergic reactions, etc.), or type "hospital near me" to find a nearby hospital.`
  },
  {
    id: 'THANKS',
    keywords: ['thank you', 'thanks', 'salamat'],
    reply: `You're welcome! Stay safe. Let me know if you need help with anything else.`
  }
];
