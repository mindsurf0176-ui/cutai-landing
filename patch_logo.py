import os

for path in ['src/app/page.tsx', 'src/app/ko/page.tsx']:
    if not os.path.exists(path): continue
    with open(path, 'r') as f:
        content = f.read()
    
    old_block = """<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>"""
    new_block = """<img src="/icon.svg" className="w-8 h-8 drop-shadow-md" alt="CutAI" />"""
    
    content = content.replace(old_block, new_block)
    
    with open(path, 'w') as f:
        f.write(content)
