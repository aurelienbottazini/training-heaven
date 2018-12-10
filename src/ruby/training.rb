# Training playground
class Symbol
  def to_proc
    proc { |ob| ob.public_send(self) }
  end
end

%w[foo bar].map(&:capitalize) # => ["Foo", "Bar"]
