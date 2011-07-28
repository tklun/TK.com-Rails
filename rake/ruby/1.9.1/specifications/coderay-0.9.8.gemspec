# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{coderay}
  s.version = "0.9.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["murphy"]
  s.date = %q{2011-05-01}
  s.description = %q{Fast and easy syntax highlighting for selected languages, written in Ruby.
Comes with RedCloth integration and LOC counter.
}
  s.email = %q{murphy@rubychan.de}
  s.executables = ["coderay", "coderay_stylesheet"]
  s.files = ["./test/functional/suite.rb", "bin/coderay", "bin/coderay_stylesheet"]
  s.homepage = %q{http://coderay.rubychan.de}
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8.2")
  s.rubyforge_project = %q{coderay}
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Fast syntax highlighting for selected languages.}
  s.test_files = ["./test/functional/suite.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
