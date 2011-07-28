# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{markdownizer}
  s.version = "0.3.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Josep M. Bach", "Josep Jaume Rey", "Oriol Gual"]
  s.date = %q{2011-02-16}
  s.description = %q{Render any text as markdown, with code highlighting and all!}
  s.email = ["info@codegram.com"]
  s.files = ["spec/markdownizer_spec.rb", "spec/spec_helper.rb"]
  s.homepage = %q{http://github.com/codegram/markdownizer}
  s.require_paths = ["lib"]
  s.rubyforge_project = %q{markdownizer}
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Render any text as markdown, with code highlighting and all!}
  s.test_files = ["spec/markdownizer_spec.rb", "spec/spec_helper.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, [">= 3.0.3"])
      s.add_runtime_dependency(%q<rdiscount>, [">= 0"])
      s.add_runtime_dependency(%q<coderay>, [">= 0"])
      s.add_development_dependency(%q<rocco>, [">= 0"])
      s.add_development_dependency(%q<git>, [">= 0"])
      s.add_development_dependency(%q<pygments>, [">= 0"])
      s.add_development_dependency(%q<rspec>, ["~> 2.5.0"])
    else
      s.add_dependency(%q<activerecord>, [">= 3.0.3"])
      s.add_dependency(%q<rdiscount>, [">= 0"])
      s.add_dependency(%q<coderay>, [">= 0"])
      s.add_dependency(%q<rocco>, [">= 0"])
      s.add_dependency(%q<git>, [">= 0"])
      s.add_dependency(%q<pygments>, [">= 0"])
      s.add_dependency(%q<rspec>, ["~> 2.5.0"])
    end
  else
    s.add_dependency(%q<activerecord>, [">= 3.0.3"])
    s.add_dependency(%q<rdiscount>, [">= 0"])
    s.add_dependency(%q<coderay>, [">= 0"])
    s.add_dependency(%q<rocco>, [">= 0"])
    s.add_dependency(%q<git>, [">= 0"])
    s.add_dependency(%q<pygments>, [">= 0"])
    s.add_dependency(%q<rspec>, ["~> 2.5.0"])
  end
end
