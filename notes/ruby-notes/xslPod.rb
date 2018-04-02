$podsGitMap = {'SDWebImage' => 'https://github.com/rs/SDWebImage.git'}


def xslPod(name, version)
    
    pod name, :git => $podsGitMap[name], :tag => version
end


def edit_pod_spec?(file)
    code = File.read(file)
    json = JSON.parse(code)
    if json['static_framework'] == true
        return false
    end
    json['static_framework'] = true
    File.write(file, JSON.generate(json))
    return true
end