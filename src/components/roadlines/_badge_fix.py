with open('src/components/roadlines/sections.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = '''          <Badge className="mb-5 bg-primary text-primary-foreground">
            24/7 St. John\u2019s Dispatch
          </Badge>
          '''
new = '          '

content = content.replace(old, new)

with open('src/components/roadlines/sections.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
